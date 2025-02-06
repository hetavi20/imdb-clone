import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo]= useState(1);

  const handlePrev = () => {
    if(pageNo > 1){
      setPageNo(pageNo - 1);
    }
  }
  const handleNext = () => {
    setPageNo(pageNo + 1);
  }
  
  

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageNo}`,
          {
            headers: {
              Accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODcwODk2M2VkOTMyNDZiMTE5ZmRiYzk4ZDAwYTcxNiIsIm5iZiI6MTczODY3NDIzMi4wNTUsInN1YiI6IjY3YTIxMDM4MzVkMzA5NzViNjAzMDMwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Imv7RKZEffuCUk5OAMvixa30temz9u1Gmt1l4DqReDY",
            },
          }
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [pageNo]);

  return (
    <div className="p-5">
      <div className="text-2xl m-5 font-bold text-center">Trending Movies</div>
      <div className="flex flex-row flex-wrap justify-around m-10 gap-8">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev}/>
    </div>
  );
}

export default Movies;
