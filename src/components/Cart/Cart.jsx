import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import Item from '../Item/Item'

const Cart = () => {
    const { cart, clearCart, total, totalQuantity } = useContext(CartContext)

    if(totalQuantity === 0){
        return (
            <>
                <h2>No hay items en el carrito</h2>
                <Link to='/' className='Option'>Productos</Link>
            </> 
        )
    }
  return (
    <>
        {console.log(total)}
        {cart.map (prod =><CartItem key={prod.item.id} {...prod} />)}   
        <h3>Total: ${total}</h3>
        <button onClick={() => clearCart()} className='Button'>Limpiar carrito</button>
        <Link to='/checkout' className='Option'>Checkout</Link>
    </>
  )
}

export default Cart