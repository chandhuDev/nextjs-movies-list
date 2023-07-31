"use client"
import React from 'react'
import { useQuery } from '@tanstack/react-query'

const page = () => {
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['movies'],
        queryFn: ()=> fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_TMDB_API}&language=en-US&page=1&region=IN`).then((res)=>res.json()),
    })
    let movieList = data?.results.map((item)=>{
        let slicedTitle=item.title.length >=24 ? item.title.split(" ").slice(0,3).join(" ") : item.title
        let slicedImage=item.backdrop_path ? item.backdrop_path : item.poster_path
        return {
           title:slicedTitle,
           images:'https://image.tmdb.org/t/p/'+'original'+slicedImage,
           
           releaseDate:item.release_date,
        }
    })

    if (isLoading) {
        return <span>Loading...</span>
      }
    
    if (isError) {
        return <span>Error: {error.message}</span>
    }

return (
    <div className='w-full h-full relative'>
      <div className='px-3 md:px-10 md:py-10 py-5 w-full h-full grid md:grid-cols-4 grid-cols-2 md:gap-6 gap-3'>
        {
          movieList.map((movie,index)=>{
            return (
            <div className='w-full md:h-96 h-60 border-2 rounded-xl hover:scale-105 hover:duration-300 hover:ease-in-out' key={index}>
              <div className='flex flex-col  rounded-lg border-1 w-full h-full cursor-pointer'>
              <div className='w-full h-3/4'>
              { movieList && 
               <div alt='No-Image' className='w-full h-full bg-cover duration-500 rounded-xl' style={{backgroundImage:`url(${movie.images})`}}>
               </div> 
              }  
              </div>
              <div className='w-full mt-3 flex flex-col gap-y-2 font-semibold justify-center text-base h-auto text-center'>
               <h2 className=''>{movie.title}</h2>
               <h3>release : <span>{movie.releaseDate}</span></h3>
              </div>
              </div>
            </div>
            )
          })
        }
    </div>
  </div>
 )
}

export default page
