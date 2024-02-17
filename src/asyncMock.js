const products = [
    {
        id: '1',
        name: 'test',
        price: '1000',
        category: 'cat',
        img: '',
        sotck: '25',
        description: 'la desc del test'
    },
    {
        id: '2',
        name: 'est',
        price: '4000',
        category: 'cat',
        img: '',
        sotck: '25',
        description: 'la desc del test'
    },
    {
        id: '3',
        name: 'tedst',
        price: '10300',
        category: 'cdat',
        img: '',
        sotck: '25',
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