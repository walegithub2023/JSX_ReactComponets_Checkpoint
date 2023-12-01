import React from 'react'
import product from './product'

const Description = () => {
  return (
    <h5 style={{
        fontSize:"100%", 
        fontWeight:"normal" 
    }}>
    {product.description}</h5>
  )
}

export default Description