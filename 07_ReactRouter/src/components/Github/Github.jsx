import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    //  const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/anish-k-mishra')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         setData(data)
    //     })
    // }, [])
    return (
        <>
            <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Repositories : {data.public_repos}</ div>
            <div className='flex items-center justify-center'>
                <img src={data.avatar_url} alt="Anish" />
            </div>
        </>
    )
}

export default Github

export const githubInfoLoader = async() => {
    const res = await fetch('https://api.github.com/users/anish-k-mishra')
    return res.json();
}
