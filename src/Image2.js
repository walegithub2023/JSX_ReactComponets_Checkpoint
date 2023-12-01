import React from 'react'
import product from './product'

const Image2 = () => {
  return (
    <img src={product.image2} alt="Product" style={{
        width:"220px", 
        height:"180px",
        margin:"auto"
        }}/>
  )
}

export default Image2