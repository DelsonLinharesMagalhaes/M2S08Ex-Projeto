import { LoginApi } from "../../services/web"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Home(){

    const [usuarios, setUsuarios] = useState([])

    useEffect(()=>{
        async function fetchAll(){
            const data = await LoginApi()
            setUsuarios(data)
        }
        fetchAll()
    },[])

     return(
        <>
            <h1>Entrei no Home</h1>
        </>
    )
}
export default Home