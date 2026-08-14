import { useEffect, useState } from "react"
import { popularBooks } from "../api"
import SearchGrid from "../components/SearchGrid"
import Header from "../components/Header.jsx"
function PopularBooks(){
  const [books,setBooks]= useState([])
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    async function getData(){
      setLoading(true)  
      try{
      const results = await popularBooks()
      setBooks(results)
      console.log(results)
      }catch(error){
         console.error(error)
         setBooks([])
      }finally{
        setLoading(false)
      }
    }
    getData()
  },[])

  return(
    <>
    {loading && (
          <div className="flex h-[100vh] min-h-full items-center justify-center">
            <p className="text-[#806F63]">Searching for books...</p>
          </div>
        )}
        <Header />
        <button onClick={()=>window.history.back() } className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-[#B07A5A] hover:text-[#F58448] border border-[#B07A5A] hover:border-[#F58448] rounded-md px-3 py-1 mt-4 ml-4 transition-colors duration-200">
        
          <span>←</span> Go back
        </button>
         <p className="text-sm font-medium uppercase tracking-wider text-[#B07A5A] ml-4 mb-3">
            Popular movies of the month
          </p>    <SearchGrid books={books}/>
    </>
  )
}
export default PopularBooks