import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import MyAppBar from './MyAppBar'
import Register from './Register'
import Produncts from './Produncts'
import ProductDetails from './ProductDetails'
import Orders from './Orders'
import Caart from './Caart'
import Login from './Login'

const MyRoutes = () => {
    return (
        <>
            <MyAppBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/products' element={<Produncts/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/proddetails' element={<ProductDetails/>}/>
                <Route path='/orders' element={<Orders/>}/>
                <Route path='/cart' element={<Caart/>}/>
            </Routes>
        </>
    )
}

export default MyRoutes