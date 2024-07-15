import React, { useContext, useState } from 'react';
import { ShopContext } from "../../../context/shop-context";
import "./purchase.css"
import { CartItem } from '../cart/cart-item';

export const Purchase = () => {
  const { purchases, setPurchases } = useContext(ShopContext);

  const hasPurchases = purchases.length > 0;

  return (
    <div className="Hist">
      <div>
        <h1>Your Purchase History</h1>
      </div>
      {hasPurchases && (
        <div className="purche">
          {purchases.map((product) => (
            purchases !== 0 ? <CartItem data={product} /> : null
          ))}
        </div>
      )}
      
      {!hasPurchases && <p>You haven't made any purchases yet.</p>}
    </div>
  );
};
