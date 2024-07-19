import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import ContactUs from './components/Contact Us/ContactUs.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

//1st way of routing different elements to the same page
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children : [
//       {
//         path: "",
//         element: <Home />
//       }, {
//         path: "about",
//         element: <About />
//       }, {
//         path: "contactUs",
//         element: <ContactUs />
//       }
//     ]
//   }
// ])

//2nd way of routing different elements to the same page (Modern way)
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
       <Route path='' element={<Home/>}/>
       <Route path='about' element={<About/>}/>
       <Route path='contactUs' element={<ContactUs/>}/>
       <Route path='user/:userid' element={<User/>}/>
       <Route 
       loader = {githubInfoLoader} //api calls can be made here itself using react router so we will not need to call the api in the github file
       path='github' 
       element={<Github/>}
       />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
