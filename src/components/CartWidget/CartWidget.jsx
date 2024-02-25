import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"
import "./CartWidget.css"

const CartWidget = () => {

  const { totalQuantity } = useContext(CartContext)

  return (
    <div>
      <Link to="/cart">
        <img className='imgCart' src="img/cart.png" alt="Carrito de compras" />
        {
          totalQuantity > 0 && <strong> {totalQuantity} </strong>
        }
      </Link>
    </div>
  )
}

export default CartWidget