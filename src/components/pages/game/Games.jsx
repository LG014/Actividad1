import React from 'react'
import { PRODUCTS } from "../../../products"
import { Product } from "./product"
import "./games.css"

export const Games = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Gaming Zone</h1>
      </div>
      <div className="products">{""}{PRODUCTS.map((product) => (
            <Product data={product}/>
            ))}
      </div>
    </div>
  )
}
