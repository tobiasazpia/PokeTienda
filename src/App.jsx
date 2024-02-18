import React from 'react'

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
    <BrowserRouter> 
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer />}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
        <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App