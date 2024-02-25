import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, getDoc, doc } from "firebase/firestore";
//import Swal from 'sweetalert2';
import "../Checkout/Checkout.css"


const Checkout = () => {

    const { cart, clearCart, total } = useContext(CartContext);

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [ordenId, setOrdenId] = useState("");
    const [error, setError] = useState("");

    const manejadorSubmit = (event) => {
        event.preventDefault();
        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor completar todos los campos");
            return;
        }

        if (email !== emailConfirmacion) {
            setError("Los emails inicial con el de confirmación no coinciden");
            return;
        }

        const orden = {
            items: cart.map(prod => ({
                id: prod.item.id,
                nombre: prod.item.nombre,
                cantidad: prod.quantity
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }

        Promise.all(
            orden.items.map( async (productoOrden) => {
                const productoRef = doc(db, "pokes", productoOrden.id);
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;

                await updateDoc(productoRef, {stock: stockActual - productoOrden.cantidad});
            })
        )
        .then(()=> {
            addDoc(collection(db, "orders"), orden)
                .then(docRef => {
                    setOrdenId(docRef.id);
                    clearCart();
                    setNombre("");
                    setApellido("");
                    setTelefono("");
                    setEmail("");
                    setEmailConfirmacion("");
                })
                .catch(error => console.log("Error al crear la orden", error))
        })
        .catch(error => {
            console.log("No pudimos actualizar el stock", error);
            setError("Error al actualizar el stock");
        })
    }

        return (
            <div>
                <h2>Checkout - Finalizamos la compra</h2>

                <form onSubmit={manejadorSubmit}>
                    {
                        cart.map(prod => (
                            <div key={prod.item.id}>
                                <p>{prod.item.nombre} x {prod.quantity}</p>
                                <p>{prod.item.precio}</p>
                                <hr />
                            </div>
                        )
                        )   
                    }               

                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="apellido" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="apellido" onChange={(e) => setApellido(e.target.value)} />                 </div>

                <div className="mb-3">
                    <label htmlFor="telefono" className="form-label">Telefono</label>
                    <input type="text" className="form-control" id="telefono" onChange={(e) => setTelefono(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">E-mail</label>
                    <input type="email" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="emailcon" className="form-label">Email Confirmación</label>
                    <input type="email" className="form-control" id="emailcon" onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>

                {error && <p style={{ color: "black" }}> {error} </p>}

               
                    <button>Finalizar Orden</button>

                    <button type="reset" className="btn btn-warning" style={{ margin: "20px", backgroundColor: "black", color: "white" }}>Borrar</button>


                {
                    ordenId && <strong>¡Gracias por su compra! Tu número de orden es: {ordenId}</strong>
                }
                </form>

            </div>
        )
}

export default Checkout