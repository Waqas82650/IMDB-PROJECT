
import React, { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
import axios from "axios"
import Pagination from "./Pagination"
function Movies({handleAddToWatchList,handleRemovetoWatchList,watchlist})
{
    const [movies,setMovies]=useState([])
    const [pageNo,setPageNo]=useState(1)

    const handlePrev=()=>
    {
    if(pageNo==1)
    {
      setPageNo(1)
    }
    else
    setPageNo(pageNo-1)

    }
    const handleNext=()=>
    {
     setPageNo(pageNo+1)
    }

    useEffect(()=>{
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=369e2e01b42d83c47fb8234669e83884&language=en-US&page=${pageNo}`)
      .then(function(res)
      {
        setMovies(res.data.results)
      })
    },[pageNo])
    return (
        <div className='p-5'>
            <div className='text-2xl m-5 font-bold text-center'>
                Trending Movies
            </div>
            <div className='flex flex-row flex-wrap justify-around gap-8'>
                {movies.map((movieObj)=>{
                  return <MovieCard key={movieObj.id} movieObj={movieObj} path={movieObj.poster_path} name={movieObj.original_title} handleAddToWatchList={handleAddToWatchList} handleRemovetoWatchList={handleRemovetoWatchList} watchlist={watchlist} />
                })}
            </div>
            <Pagination page={pageNo} prev={handlePrev} next={handleNext}/>
        </div>
      )
}

export default Movies