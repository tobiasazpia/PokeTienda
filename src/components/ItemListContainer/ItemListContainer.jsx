import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { getProductByCategory, getProducts } from '../../asyncMock'
import { useParams } from 'react-router-dom'

import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/config'

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])

  const { categoryId } = useParams()

  useEffect(() => {
    console.log ('catid ', categoryId)
    const collectionRef = categoryId
    ?
      query(collection(db, 'pokes'), where('gen', '==', categoryId))
    :
      collection(db, 'pokes')
      console.log ('colref ',collectionRef)

    getDocs(collectionRef)
      .then(response => {
        const productsAdapted = response.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data }
        })
        setProducts(productsAdapted)
      })
      .catch(error => {
        console.error(error)
      })

  }, [categoryId])

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer