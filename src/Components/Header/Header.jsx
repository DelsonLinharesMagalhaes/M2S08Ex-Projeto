import { NavLink } from "react-router-dom"
import './styles.css'
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"


function Header(){

const {logout} = useContext(AuthContext)

    return(
    <div>
        <div className="container">
            <div className="row">  
                <div className="col-3 px-0">

                    <div className="sidebar">

                        <ul className="menu-header">

                            <li className="menu-item">
                                <img className="float-right" alt ="Aplicativo LabMedical" src='https://thumbs.dreamstime.com/z/%C3%ADcone-de-destaque-m%C3%A9dico-vetor-para-design-gr%C3%A1fico-logotipo-web-site-m%C3%ADdia-social-app-ui-ilustra%C3%A7%C3%A3o-224301847.jpg?w=768' 
                                    width='30'/>
                            </li>
                            <li className="menu-item">
                                <NavLink to ='/'>Home</NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink to ='perfil'>Perfil</NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink to ='contato'>Contato</NavLink>
                            </li>
                            <li>
                                <button onClick={logout} className="btn btn-primary">Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-9 px-0">  
                    <div className="navbar bg-body-tertiary">
                        <div className="container-fluid">
                            <span className="navbar-brand mb-0 h1">Estatísticas e informações</span>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    </div>
    )
}
export default Header