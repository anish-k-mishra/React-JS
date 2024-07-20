import React, {useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {user} = useContext(UserContext) //we are taking here user because we want to access the values not send the values
    if(!user)return <div>Enter valid credentials!</div>

    return <div>Welcome {user.username}, please remember your password: {user.password}</div>
}

export default Profile
