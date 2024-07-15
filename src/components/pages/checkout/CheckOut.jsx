import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../../context/shop-context";
import "./checkout.css";

export const CheckOut = () => {
  return (
    <div className="check">
      <>
        <UserForm />
      </>
    </div>
  );
};

function UserForm() {
  const navigate = useNavigate();
  const { checkout, cartItems, purchaseProduct } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    address: '',
    city: '',
    paymentMethod: '',
  });

  const [isValid, setIsValid] = useState(false);
  
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    const allFieldsFilled = formData.name !== '' &&
                            formData.lastName !== '' &&
                            formData.email !== '' &&
                            formData.address !== '' &&
                            formData.city !== '' &&
                            formData.paymentMethod !== '';
    setIsValid(allFieldsFilled);
  }, [formData.name, formData.email, formData.address, formData.city, formData.paymentMethod]);

  return (
    <form>
      <h1>Check Out</h1>
      <label>
        *First Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>

      <label>
        *Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>

      <div>
        <label>
          Phone Number:
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </label>

        <label>
          *E-Mail:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          *Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </label>

        <label>
          *City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </label>
      </div>

      <label>
        *Payment Method:
        <select value={formData.paymentMethod} onChange={handleChange} name="paymentMethod">
          <option value="">Select Payment Method</option>
          <option value="creditCard">Credit Card</option>
          <option value="debitCard">Debit Card</option>
          <option value="paypal">Paypal</option>
        </select>
      </label>

      <div className="submit">
        <button disabled={!isValid} onClick={() => {if (isValid){checkout(); navigate("/");}}}>
          Pay</button>
      </div>
      <div>*Required Fields</div>
    </form>
  );
}

export default UserForm;
