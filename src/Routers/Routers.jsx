import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Nav from '../Pages/Nav'
import Footer from '../Pages/Footer'
import Products from '../Pages/Products'
import ProductDetails from '../Pages/ProductDetails'
import Cart from '../Pages/Favorites'
import Favorites from '../Pages/Favorites'

const Routers = () => {
    return (
        <>
            <Router>
                <Nav />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/nav' element={<Nav />} />
                    <Route path='/footer' element={<Footer />} />
                    <Route path='/Products' element={<Products />} />
                    <Route path='/ProductDetails' element={<ProductDetails />} />
                    <Route path='/Favorites' element={<Favorites />} />
                </Routes>
                <Footer />
            </Router>
        </>
    )
}

export default Routers