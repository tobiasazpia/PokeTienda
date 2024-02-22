import { createContext, useState } from 'react'

export const CartContext = createContext({
    cart: [],
    total: 0,
    totalQuantity: 0
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { item, quantity }])
        } else {
            const CartUpdated = cart.map(prod => {
                if (prod.item.id == item.id) {
                    return { ...prod, quantity: prod.quantity + quantity };
                } else {
                    return prod;
                }
            })
            setCart (CartUpdated);
        }
        setTotal(prev => prev + item.price * quantity)
        setTotalQuantity(prev => prev + quantity)
    }

    const removeItem = (itemId) => {
        const cartUpdate = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdate)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.find(prod => {
            const b = (prod.item.id == itemId)
            return b
        }
        )
    }

    return (
        <CartContext.Provider value={{ cart, totalQuantity, total, addItem, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}