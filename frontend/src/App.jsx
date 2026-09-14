import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Cart from './pages/Cart/Cart.jsx'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx'
import Home from './pages/home/Home.jsx'
import About from './pages/About/About.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
import LoginPopup from './components/LoginPopup/LoginPopup.jsx'
import Verify from './pages/Verify/Verify.jsx'
import MyOrders from './pages/MyOrders/MyOrders.jsx'

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}

      <div className='app'>

        <Navbar setShowLogin={setShowLogin} />

        <Routes>

          <Route path='/' element={<Home />} />

          <Route path='/cart' element={<Cart />} />

          <Route path='/order' element={<PlaceOrder />} />

          <Route path='/verify' element={<Verify />} />

          <Route path='/myorders' element={<MyOrders />} />

          <Route path='/about' element={<About />} />

          <Route path='/contact' element={<Contact />} />

        </Routes>

      </div>

      <Footer />

    </>
  )
}

export default App