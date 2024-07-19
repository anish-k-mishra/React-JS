import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom' //this renders all the elements in given order. Here, all the pages will be rendered between header and footer, header and footer will remain intact, and all the pages will efficiently get rendered b/w them

function Layout() {
    return (
        <>
            <Header />
            <Outlet /> 
            <Footer />
        </>
    )
}

export default Layout
