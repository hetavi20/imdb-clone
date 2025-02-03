import React from 'react'
import MovieCard from './MovieCard'

function Movies() {
  return (
    <div className='p-5'>
        <div className='text-3xl m-5 font-bold text-center'>
          Trending Movies
        </div>
<div className='flex flex-row flex-wrap justify-between'>
  <MovieCard/>
  <MovieCard/>
  <MovieCard/>
  <MovieCard/>
  <MovieCard/>
  <MovieCard/>
  <MovieCard/>
  <MovieCard/>
</div>

    </div>
  )
}

export default Movies

