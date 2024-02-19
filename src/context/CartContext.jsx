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

    console.log(cart)
    console.log("Total a pagar", total)
    console.log("Cantidad de elementos", totalQuantity)

    const addItem = (item, quantity) => {
        console.log("Add Item");
        console.log(item);
        if (!isInCart(item.id)) {
            console.log("este no estaba en el carrito");
            setCart(prev => [...prev, { item, quantity }])
        } else {
            console.log("si estaba! elemento a sumar");
            const CartUpdated = cart.map(prod => {
                if (prod.item.id == item.id) {
                    console.log(prod.item.id, "ya estaba, a actualizar");
                    return { ...prod, quantity: prod.quantity + quantity };
                } else {
                    console.log(prod.item.id, "no estaba");
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
            console.log("Comparando ",prod.item.id, " con ",itemId)
            console.log(b)
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