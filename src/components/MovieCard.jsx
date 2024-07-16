
import React from "react"


function MovieCard({movieObj,path,name,handleAddToWatchList,handleRemovetoWatchList,watchlist})
{
  function doesContain(movieObj)
  {
    for(let i=0;i<watchlist.length;i++)
    {
      if(watchlist[i].id == movieObj.id)
        return true;
    }
    return false;
  }
  return (
    <div className='h-[40vh] w-[150px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end' style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${path})`}}>
       

       {doesContain(movieObj)?<div onClick={()=>(handleRemovetoWatchList(movieObj))} className="m-1 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60">
          &#10060;
       </div>: <div onClick={()=>(handleAddToWatchList(movieObj))} className="m-1 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60">
          &#128525;
       </div>}
      
       
       <div className=' bottom-0 left-0 right-0  rounded-b-xl text-white text-sm w-full p-2 text-center bg-gray-900 max-h-[25%] overflow-hidden line-clamp-4'>
             {name}
       </div>
    </div>
  )
}

export default MovieCard