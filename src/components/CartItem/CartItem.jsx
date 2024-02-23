import React from 'react'

const CartItem = ({item,quantity}) => {
  return (
    <div>
        <h3>{item.name}</h3>
        <p> Cantidad: {quantity}</p>
        <p> Precio: {item.precio}</p>
    </div>
  )
}

export default CartItem