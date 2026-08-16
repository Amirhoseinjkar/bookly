import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Search from './components/Search.jsx'
import MyBooks from './pages/MyBooks.jsx'
import BookDetails from './pages/BookDetails.jsx'
import PopularBooks from './pages/PopularBooks.jsx'
import Categories from './pages/Categories.jsx'
import Header from './components/Header.jsx'
import CategoryDetails from './pages/CategoryDetails.jsx'
function App(){
  return(
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search' element={<Search/>} />
      <Route path='/book-details/:id' element={<BookDetails/>} />
      <Route path='/my-books' element={<MyBooks/>} />
      <Route path='/popular-all' element={<PopularBooks/>} />
      <Route path='/categories' element={<Categories />} />
      <Route path='/categories/:id' element={<CategoryDetails />} />
    </Routes>
    </>
  )

}
export default App