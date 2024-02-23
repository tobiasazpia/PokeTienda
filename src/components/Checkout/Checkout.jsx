import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";
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
                cantidad: prod.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }
        addDoc(collection(db, "orders"), orden)
            .then(docRef => {
                setOrdenId(docRef.id)
                clearCart();
                setNombre("");
                setApellido("");
                setTelefono("");
                setEmail("");
                setEmailConfirmacion("");
            })
            .catch (error => {console.log ("Error al confeccionar la Orden",error)
            setError("error al armar la orden")})
        

        return (
            <div>
                <h2>Checkout - Finalizamos la compra</h2>

                <form>
                    {
                        cart.map(prod => (
                            <div key={prod.item.id}>
                                <p>{prod.item.nombre} x {prod.item.cantidad}</p>
                                <p>{prod.item.precio}</p>
                                <hr />
                            </div>
                        )
                        )
                    }
                </form>

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

                <div className="mb-3">
                    <button className="btn btn-primary" disabled={carrito.length === 0}>Finalizar Orden</button>
                    <button type="reset" className="btn btn-warning" style={{ margin: "20px", backgroundColor: "black", color: "white" }}>Borrar</button>
                </div>

                {
                    ordenId && <strong>¡Gracias por su compra! Tu número de orden es: {ordenId}</strong>
                }

            </div>
        )

    }


    //             Promise.all (
    //             orden.items.map( async (libroOrden)=>{
    //             const libroRef = doc(db, "items", libroOrden.id)    
    //             const libroDoc= await getDoc(libroRef)
    //             const stockActual = libroDoc.data().stock;
    //             await updateDoc (libroRef, {stock: stockActual - libroOrden.cantidad})
    //         })
    //         )
    //         .then(()=> {


    //                   Swal.fire({
    //                     title: "Orden generada exitosamente!!",
    //                     icon: "success",
    //                     text: `Gracias por la compra!! Tu numero de orden es: ${docRef.id}`,
    //                     showCancelButton: true,
    //                     confirmButtonText: 'Confirmar',
    //                     cancelButtonText: 'Cancelar',
    //                   }).then((result) => {
    //                     if (result.isConfirmed) {                      
    //                       window.location.href = '/';                     }
    //                   });

    //             })                   
    //             .catch (error => console.log ("Error al confeccionar la Orden",error) )
    //             })

    //             .catch (error => {
    //                 console.log ("No se pudo actualizar el stock", error)
    //             setError ("Error no se pudo actualizar el stock")

    //         })

    //     }       

    //        return (
    //         <div className="container">
    //             <h2 className="mt-5">Checkout - Finalizamos la Compra </h2>

    //             <form onSubmit={manejadorSubmit}>
    //                 {
    //                     cart.map(libro => (
    //                         <div className="detalle" key={libro.item.id}>
    //                             <p> Descripción:  {libro.item.nombre} x {libro.cantidad} </p>
    //                             <p> Precio: $ {libro.item.precio} </p>

    //                         </div>
    //                     ))
    //                 }

    //                 <div className="mb-3">
    //                     <button className="btn btn-primary" disabled={carrito.length === 0}>Finalizar Orden</button>
    //                     <button type="reset" className="btn btn-warning" style={{margin: "20px", backgroundColor: "black", color: "white"}}>Borrar</button>
    //                 </div>
    //             </form>
    //         </div>
    //     );
    // }
}

export default Checkout