import React from 'react'
import product from './product'

const Price = () => {
  return (
    <h5 style={{
        fontSize:"100%", 
        paddingTop:"10px",
        fontWeight:"normal" 
    }}
    >{product.price}</h5>
  )
}

export default Price