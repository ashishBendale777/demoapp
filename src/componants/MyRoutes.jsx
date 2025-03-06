import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import MyAppBar from './MyAppBar'
import Register from './Register'

const MyRoutes = () => {
    return (
        <>
            <MyAppBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/register' element={<Register/>}/>
            </Routes>
        </>
    )
}

export default MyRoutes