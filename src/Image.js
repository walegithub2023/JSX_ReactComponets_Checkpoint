import React from 'react'
import product from './product'

const Image = () => {
  return (
    <img src={product.image} alt="Product" style={{
        width:"220px", 
        height:"180px",
        margin:"auto"
        }}/>
  )
}

export default Image