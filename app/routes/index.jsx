import { useLoaderData } from "@remix-run/react";
import { supabase } from "../utils/supabase.server";
import { Link } from "@remix-run/react";

export const loader = async({}) => {
  const {data} = await supabase.from("productos").select()
  return {productos: data ?? []}
}


export default function Index() {
  const {productos} = useLoaderData()
  return (
    <main>
      <div className="lista-productos">
      {Object.values(productos).map(producto => (
        <div  className="producto" key={producto.id}>
          <Link to={`/productos/${producto.id}`}>
            <img className="foto-producto" src={`${producto.foto}`} alt="" />
          </Link>
        </div>
      ))}
      </div>
    </main>
  );
}
