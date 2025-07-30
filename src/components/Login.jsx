import {useState} from 'react'

function Login() {
const [name, setName]=useState("")
const [dis,setDis]=useState();
function handleSubmit(e){
  setDis(name);
  e.preventDefault();
  setName("");
}
  return (
    <>
    <h1>login here!!</h1>
    <form>
    <label>Name: </label>
    <input type="text" id="name" class={name} placeholder="enter name" 
     onClick={(e)=>setName(e.target.value)}/>
     <button className='btn' type="submit">Submit</button>
     </form>
     <h1>{}</h1>
    </>
  )
}

export default Login;