import { useState } from "react"
import { auth } from "../firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
function LogIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
 async function handleSubmit(e) {
    e.preventDefault()
    

    try{
      const userCredential = await  signInWithEmailAndPassword(auth,email,password)
      console.log(userCredential)
    }catch(error){
      console.log(error)
    }
  }
  return(
    <form onSubmit={handleSubmit}>
      <div>
      <input type="text"
      onChange={(e)=>{
        setEmail(e.target.value)
      }}
       placeholder="enter your email"  />
      <input type="password" 
      onChange={(e)=>{
        setPassword(e.target.value)
      }}
      placeholder="enter your password"/>
     </div>
     <div>
      <button>log in</button>
      <p>dont have an account? <span>Register</span></p>

     </div>
    </form>
  )
}
export default LogIn