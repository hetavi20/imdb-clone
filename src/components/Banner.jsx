import React from "react";

function Banner() {
  return (
    <div
    className="h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end justify-center"
    style={{
      backgroundImage: `url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5298bac0-b8bf-4c80-af67-725c1272dbb0/dfylpne-d32e5569-bcbd-4c32-bcd4-bf4f3e2cf9a6.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUyOThiYWMwLWI4YmYtNGM4MC1hZjY3LTcyNWMxMjcyZGJiMFwvZGZ5bHBuZS1kMzJlNTU2OS1iY2JkLTRjMzItYmNkNC1iZjRmM2UyY2Y5YTYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.DIJRacdh0jEHndKqjIKWLjI1hELwqOKJvCwC4nQzqP0)`,
    }}
   
  >
     <div className='text-white text-4xl bg-gray-900/60 w-full p-4 text-center'>End Game</div>
  </div>
  
  
  );
}

export default Banner;
