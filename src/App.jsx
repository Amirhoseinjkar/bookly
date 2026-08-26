import './App.css'

import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Search from './components/Search.jsx'
import MyBooks from './pages/MyBooks.jsx'
import BookDetails from './pages/BookDetails.jsx'
import PopularBooks from './pages/PopularBooks.jsx'
import Categories from './pages/Categories.jsx'
import Header from './components/Header.jsx'
import CategoryDetails from './pages/CategoryDetails.jsx'
import Footer from './components/Footer.jsx'
import Register from './pages/Register.jsx'
import LogIn from './pages/LogIn.jsx'
import Profile from './pages/Profile.jsx'
import { useEffect } from 'react'
function App(){
   const {pathname} = useLocation();
  useEffect(() => {
   
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
    
  }, [pathname]);
  return(
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<LogIn />} />
      <Route path='register' element={<Register/>}/>
      <Route path='/search' element={<Search/>} />
      <Route path='/book-details/:id' element={<BookDetails/>} />
      <Route path='/my-books' element={<MyBooks/>} />
      <Route path='/popular-all' element={<PopularBooks/>} />
      <Route path='/categories' element={<Categories />} />
      <Route path='/categories/:id' element={<CategoryDetails />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    <Footer />
    </>
  )

}
export default App