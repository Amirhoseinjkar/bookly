import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Search from './components/Search.jsx'
import MyBooks from './pages/MyBooks.jsx'
import BookDetails from './pages/BookDetails.jsx'
import PopularBooks from './pages/PopularBooks.jsx'
function App(){
  return(
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search' element={<Search/>} />
      <Route path='/book-details/:id' element={<BookDetails/>} />
      <Route path='/my-books' element={<MyBooks/>} />
      <Route path='/popular-all' element={<PopularBooks/>} />
    </Routes>
    </>
  )

}
export default App