
import './App.css'
import Navbar from './components/Navbar'
import Movies from './components/Movies'
import WatchList from './components/WatchList'
import Banner from './components/Banner'

import {BrowserRouter,Routes,Route} from 'react-router-dom'//enables routind=g in our app
import { useEffect, useState } from 'react'

function App() {
  
  let [watchlist,setWatchList]=useState([])

  let handleAddtoWatchList=(movieObj)=>{
    let newWatchlist=[...watchlist,movieObj]
    localStorage.setItem('moviesApp',JSON.stringify(newWatchlist))
    setWatchList(newWatchlist)
  }
  let handleRemovetoWatchList=(movieObj)=>{
   let filteredWatchList=watchlist.filter((movie)=>{
    return movie.id != movieObj.id
   })
   localStorage.setItem('moviesApp',JSON.stringify(filteredWatchList))
   setWatchList(filteredWatchList)
  }

  useEffect(()=>{
    let moviesFromLocalStorage=localStorage.getItem('moviesApp')
    if(!moviesFromLocalStorage)
      return
    else
    setWatchList(JSON.parse(moviesFromLocalStorage))
  },[])
  return(
 <>

  <BrowserRouter>
    <Navbar/>

    <Routes>

    <Route path='/' element={<><Banner/> <Movies watchlist={watchlist}
    handleAddToWatchList={handleAddtoWatchList} handleRemovetoWatchList={handleRemovetoWatchList}/></>}></Route>
    <Route path='/watchlist' element={<WatchList watchlist={watchlist} setWatchList={setWatchList} handleRemovetoWatchList={handleRemovetoWatchList}/>}></Route>

    </Routes> 
  
  </BrowserRouter>
  

 </>
   
  )
}

export default App

//https://api.themoviedb.org/3/movie/popular?api_key=369e2e01b42d83c47fb8234669e83884&language=en-US&page=2