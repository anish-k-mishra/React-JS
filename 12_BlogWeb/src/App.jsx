
import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'

import './App.css'
import authService from './appwrite/auth';
import {login, logout} from './store/authSlice';
import {Header, Footer} from './components'
import { Outlet } from 'react-router-dom';


function App() {
  // console.log(process.env.REACT_APP_APPWRITE_URL); //accing the env variables if using create react app
  // console.log(import.meta.env.VITE_APPWRITE_URL); 

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}));
      }
      else{
        dispatch(logout());
      }
    })
    .finally(()=>setLoading(false));
  }, [])

  return (!loading) ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          Todo:<Outlet/>
        </main>
        <Footer />
      </div>
    </div>
  ) : (null)
}

export default App
