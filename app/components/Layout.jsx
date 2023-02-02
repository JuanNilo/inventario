import { Link } from "@remix-run/react"

export function Layout(){
    return(
        <div className="layout">
            <Link to='/'>
                <h1>Inventario</h1>
            </Link>
        </div>
    )
}