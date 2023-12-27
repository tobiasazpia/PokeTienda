import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <header>
            <h1>PokeTienda</h1>
            <nav>
                <ul>
                    <li className='pri'>Primera Generacion</li>
                    <li className='seg'>Segunda Generacion</li>
                    <li className='ter'>Tercer Generacion</li>
                </ul>
            </nav>
            <CartWidget/>
        </header>

    )
}

export default NavBar