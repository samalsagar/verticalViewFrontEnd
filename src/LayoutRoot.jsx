import React from 'react'
import Header from './components/common/Header/Header'
import Footer from './components/common/Footer/Footer'

import { Outlet } from 'react-router-dom'

function LayoutRoot() {
  return (
    <div>
      <Header />
        <Outlet />
      <Footer />
    </div>
  )
}

export default LayoutRoot
