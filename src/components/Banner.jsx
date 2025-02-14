import React from "react";

function Banner() {
  return (
    <div
    className="h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end justify-center"
    style={{
      backgroundImage: `url(https://pixelz.cc/wp-content/uploads/2018/05/avengers-infinity-war-international-poster-uhd-8k-wallpaper.jpg)`,
    }}
   
  >
     <div className='text-white text-4xl bg-gray-900/60 w-full p-4 text-center'>End Game</div>
  </div>
  
  
  );
}

export default Banner;

