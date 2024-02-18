import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <header>
            <Link to='/'>
                <h1>PokeTienda</h1>
            </Link>
            <div className='Categories'>
                <NavLink to={`/category/primera`} className='prim'>Primera Genereción</NavLink>
                <NavLink to={`/category/segunda`} className='seg'>Segunda Genereción</NavLink>
                <NavLink to={`/category/tercera`} className='ter'>Tercera Genereción</NavLink>
            </div>
            <CartWidget />
        </header>

    )
}

export default NavBar