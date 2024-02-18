const products = [
    {
        id: 1,
        name: 'Pika Prim',
        price: 1000,
        category: 'primera',
        img: 'https://i.pinimg.com/736x/f3/e1/b8/f3e1b8019f160f88531d8af792716b4f.jpg',
        stock: 25,
        description: 'la desc del test'
    },
    {
        id: 2,
        name: 'Pika Seg 1',
        price: 4000,
        category: 'segunda',
        img: 'https://i.pinimg.com/736x/f3/e1/b8/f3e1b8019f160f88531d8af792716b4f.jpg',
        stock: 25,
        description: 'la desc del test'
    },
    {
        id: 3,
        name: 'Pika Seg 2',
        price: 10300,
        category: 'segunda',
        img: 'https://i.pinimg.com/736x/f3/e1/b8/f3e1b8019f160f88531d8af792716b4f.jpg',
        stock: 25,
        description: 'la desc del test'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id == productId))
        }, 500)
    })
}

export const getProductByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === productCategory))
        }, 500)
    })
}