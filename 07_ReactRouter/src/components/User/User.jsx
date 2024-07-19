import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams();
    return (
        <div className='flex justify-center'>

            <div className=' flex justify-center bg-gray-600 text-white text-2xl p-4 rounded-3xl w-[500px]'>User : {userid}</div>
        </div>
    )
}

export default User
