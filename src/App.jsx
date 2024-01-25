import React from 'react'

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'

const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Segunda entrega!"/>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agreagada ", quantity)}/>
    </>
  )
}

export default App