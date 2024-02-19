import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"
import "./CartWidget.css"

const CartWidget = () => {
  
  const {totalQuantity} = useContext(CartContext)
  console.log("cart widg");
  console.log("cart widg",totalQuantity);

  return (
    <div>
        <img className='imgCart' src="img/cart.png" alt="Carrito de compras"/>
        <strong> {totalQuantity} </strong>
    </div>
  )
}

export default CartWidget

    // <Link to='/cart'>
    //   <img className='CartImg' src="img/cart.png" alt="cart-widget" />
    //   {totalQuantity > 0 && <strong className="solicitud" >{cantidadTotal}</strong>}
    // </Link>

