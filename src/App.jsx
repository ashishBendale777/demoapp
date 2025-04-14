import React from 'react'
import About from './componants/About'
import Home from './componants/Home'
import "./App.css"
import MyAppBar from './componants/MyAppBar'
import MyRoutes from './componants/MyRoutes'
import AdminRoutes from './admin/AdminRoutes'
import NestedRoutes from './NestedRoutes'

const App = () => {
  return (
    <>
      <MyRoutes/>
      {/* <AdminRoutes/> */}
      {/* <NestedRoutes /> */}
    </>
  )
}

export default App