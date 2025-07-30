import {useState} from 'react'
import Login from './Login.jsx'
import Signin from './Signin.jsx'

function Whole() {
const [form, setForm]=useState(false)
const[display,setDisplay]=useState(" ")
  return (
    <>
    <button onClick={()=>setForm(prev=>!prev)}>SignUP!!!</button>
    {
        form ? <Login/> : <Signin/>
    }
    </>
  )
}

export default Whole;