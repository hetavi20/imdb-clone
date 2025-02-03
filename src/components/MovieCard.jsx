import React from "react";

function MovieCard() {
  return (
    <div
      className="h-[35vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duaration-300  hover:cursor-pointer"
      style={{
        backgroundImage: `url(https://m.media-amazon.com/images/I/81KWTMl0JUL._AC_UF1000,1000_QL80_.jpg)`,
      }}
    ></div>
  );
}

export default MovieCard;
