import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminDrawer from './AdminDrawer'
import Dashboard from './compo/Dashboard'
import AddProd from './compo/AddProd'
import AllProds from './compo/AllProds'
import Orders from './compo/Orders'

const AdminRoutes = () => {
    return (<>
        <AdminDrawer />
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/addprod' element={<AddProd />} />
            <Route path='/allprod' element={<AllProds />} />
            <Route path='/orders' element={<Orders />} />

        </Routes>
    </>

    )
}

export default AdminRoutes