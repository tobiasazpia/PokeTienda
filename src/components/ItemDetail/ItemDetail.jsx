import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/cartContext"

const ItemDetail = ({ id, nombre, img, categoryId, description, precio, stock }) => {
    const [quantityAdded, SetQuantityAdded] = useState(0)

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        SetQuantityAdded(quantity)

        const item = {
            id, nombre, precio, img
        }

        addItem(item,quantity)
    }

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">{nombre}</h2>
            </header>
            <picture><img src={img} alt={nombre} className="ItemImg" /></picture>
            <section>
                <p className="Info">
                    Categoria: {categoryId}
                </p>
                <p className="Info">
                    Descripcion: {description}
                </p>
                <p className="Info">
                    Precio: ${precio}
                </p>
            </section>
            <footer className="ItemFooter">
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className="Option">Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail