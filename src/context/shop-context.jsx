import { createContext, useContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [purchases, setPurchases] = useState([]);
  const [returns, setReturns] = useState([]);
  const [purchaseDate, setPurchaseDate] = useState([]);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    const product = PRODUCTS.find((product) => product.id === itemId);
    if (product) {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    // Create an empty array to store purchases
    const newPurchases = [];


    PRODUCTS.forEach((product) => {
      const cartQuantity = cartItems[product.id] || 0;
      if (cartQuantity > 0) {
        const purchase = {
          ...product,
          date: new Date(),
          originalPrice: product.price,
        };
        newPurchases.push(purchase);
      }
    });

    // Update state in a single call for efficiency
    setPurchases([...purchases, ...newPurchases]);
    setPurchaseDate([...purchaseDate, ...newPurchases.map(purchase => purchase.date)]);

    setCartItems(getDefaultCart());
  };

  const returnProduct = (itemId) => {
    const purchase = purchases.find((purchase) => purchase.id === itemId);
    if (purchase) {
      setPurchases(purchases.filter((purchase) => purchase.id !== itemId));
      setReturns([...returns, purchase]);
    }
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
    purchases,
    returns,
    returnProduct,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
