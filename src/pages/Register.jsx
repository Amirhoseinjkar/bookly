import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"
function Register() {
  const [email, setEmail] = useState("")  
  const [password, setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")
 async function handleSubmit(e) {
    e.preventDefault()
    if(password !== confirmPassword){   
      console.log('paswords do not match')
      return
  }
  try{
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
     console.log(userCredential)
  }catch(error){
    console.log(error)
  }
}

  return(
    <div>
      <h1>register</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="enter your email" 
        value={email} onChange={(e)=>{
          setEmail(e.target.value)
        }}
         />
        <input type="password" 
        value={password} onChange={(e)=>{
          setPassword(e.target.value)
        }}
        placeholder="enter your password" />
        <input type="password" placeholder="confirm your password" value={confirmPassword} onChange={(e)=>{
          setConfirmPassword(e.target.value)
        }} />
        <button >Register</button>
      </form>
    </div>
  )
}
export default Register