import { useLoaderData } from "@remix-run/react"
import { supabase } from "../../utils/supabase.server.js"
import { createClient } from "@supabase/supabase-js"

export const loader = async ({params}) => {
    const {data} = await supabase.from("productos").select().eq('id', params.productoId)

    return {productos: data ?? []}
}

// export const handleProduct = async(producto, cantidad) => {
//     console.log(producto.id, cantidad)
// }

export const handleProduct = async (producto, cantidad)=>{
    const supabase_url = "https://dwynjiitrdbrxzthygdm.supabase.co"
    const supabase_api = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3eW5qaWl0cmRicnh6dGh5Z2RtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUyMTUxOTgsImV4cCI6MTk5MDc5MTE5OH0.PDjCzFAFqQ0YkqcP9iysNEiHx0DZ-JU9OD4wBwwzz0g"
    const supabase = createClient(supabase_url, supabase_api)
    if(producto.cantidad+cantidad < 0){
        alert('no queda stock')
    }else{
        if(producto.cantidad+cantidad === 0){
            alert('no quedan productos... hay que comprar!')
        }
        await supabase.from('productos').update({cantidad: producto.cantidad+cantidad})
        .eq('id', producto.id)
        location.reload()
    }
}

export default function singlePost(){
    const {productos} = useLoaderData()
    return(
        <div className="producto-page">
            {Object.values(productos).map(producto => (
                <div key={producto.id}>
                    <h1>{producto.nombre}</h1>
                    <img className="foto-page" src={`${producto.foto}`} alt="" height={200} />
                    <h2>Quedan: {producto.cantidad}</h2>
                    <button type="submit" onClick={() => handleProduct(producto, 1)} className="boton agregar">Agregar</button>
                    <button type="submit" onClick={() => handleProduct(producto, -1)} className="boton quitar">Quitar</button>
                </div>
            ))}
        </div>
    )
}