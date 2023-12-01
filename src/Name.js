import React from 'react'
import product from './product'

const Name = () => {
  return (
    <h5 style={{
        fontSize:"90%",
        fontWeight:"normal" 
    }}>
    {product.name}</h5>
  )
}

export default Name