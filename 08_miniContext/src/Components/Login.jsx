import React, {useState, useContext} from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useContext(UserContext) //we are providing the context of UserContext where we had defined the setUser to set the user, and hence we can access that here. We are taking here setUser as we want to send the value

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username, password}) //sending data via useContext
    }

    return (
        <div>
            <h2>Log In</h2>
            <input type="text" placeholder='username' 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input type="text" placeholder='password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
