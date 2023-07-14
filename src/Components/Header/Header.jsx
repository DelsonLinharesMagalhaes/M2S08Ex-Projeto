import { NavLink } from "react-router-dom"
import './styles.css'
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

function Header(){
    return(
        <nav className="menu-nav">
            <ul className="menu-header">
                <li className="menu-item">
                    <NavLink to ='/'>Home</NavLink>
                </li>
                <li className="menu-item">
                    <NavLink to ='login'>Login</NavLink>
                </li>
                <li className="menu-item">
                    <NavLink to ='perfil'>Perfil</NavLink>
                </li>
                <li className="menu-item">
                    <NavLink to ='contato'>Contato</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Header