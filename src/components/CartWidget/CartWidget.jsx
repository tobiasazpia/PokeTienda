import React, { useContext } from 'react'
import './CartWidget.css'
import { CartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const {totalQuantity} = useContext(CartContext)
  return (
    <Link to='/cart' className='CartWidget' style={{ display: totalQuantity ? 'block' : 'none'}}>
      <img className='CartImg' src="img.cart.png" alt="cart-widget" />
      {totalQuantity}
    </Link>
  )
}

export default CartWidget