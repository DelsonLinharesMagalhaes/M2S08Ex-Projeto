import { useState,useEffect,useRef,useContext } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import './styles.css'
import { LoginApi } from "../../services/web"
import { AuthContext } from "../../context/AuthContext"


function Login(){

    const {login} = useContext(AuthContext)

    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errorForm, setErrorForm] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        setErrorForm(false)
        emailRef.current.style.borderColor='black'
        passwordRef.current.style.borderColor='black'
    },[password])

    const handleEmailChange = (event) => {
            setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault()
        const response = await LoginApi(email, password)
        if(!response){
            setErrorForm(true)
            emailRef.current.style.borderColor='red'
            passwordRef.current.style.borderColor='red'
            return;
        }  
         login(response)
         navigate('/')
    }

    return(
        <>
            <h1>Login</h1>
            <form style={{'maxWidth': '320px'}} onSubmit={handleSubmit}>
                <input required type='email' value={email} ref={emailRef} placeholder="Digite seu e-mail" onChange={handleEmailChange}/>
                <input required type='password' minLenght='8' value={password} ref={passwordRef} placeholder='Digite sua senha' onChange={handlePasswordChange}/>
                {errorForm && <span>E-mail e/ou senha inválidos</span>}
                <button type='submit'>Entrar</button>
            </form>
        </>
    )
}
export default Login