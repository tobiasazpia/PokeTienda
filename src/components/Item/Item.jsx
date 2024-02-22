import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, img, precio, stock}) => {
  return (
    <article className="CardItem">
        <header className="Header">
            <h2 className="ItemHeader">{nombre}</h2>
        </header>
        <picture>
            <img src={img} alt={nombre} className="ItemImg"/>
        </picture>
        <section>
            <p className="Info">
                Precio: ${precio}
            </p>
            <p className="Info">
                Stock disponible: {stock}
            </p>
        </section>
        <footer className="ItemFooter">
            <Link to={`/item/${id}`} className='Option'>Ver detalle</Link>
        </footer>
    </article>
  )
}

export default Item