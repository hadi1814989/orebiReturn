import React from 'react'
import { Outlet } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import Header from './Header'
import Footer from './Footer'
const Layout = () => {
  return (
   <>
   <Header />
   <SearchBar />
   <Outlet />
  <Footer />
   </>
  )
}
export default Layout