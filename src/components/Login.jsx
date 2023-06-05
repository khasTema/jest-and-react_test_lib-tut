import { useState } from "react"

const Login = () => {

    const  [err, setErr] = useState(false)

  return (
    <div className="container">
        <form>
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <button disabled >Login</button>
            <span data-testid='error' style={{visibility: err ? "visible" : "hidden"}}>Something went wrong</span>
        </form>
      
    </div>
  )
}

export default Login
