import Link from "next/link";
import React from "react";

const Photos = () => {
    
  return (
    <div className=" py-8 lg:py-16 photo">
      <div>
        <h2 className=" text-center text-[40px] text-[#f67e7d] font-bold lg:text-[90px]  font-GreatVibes">
          Gallery
        </h2>
      </div>
      <div className=" w-[90%] gap-y-8 justify-items-center mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <img className="w-[90%] rounded" src="./assists/1.jpg" alt="Pics" />
        <img className="w-[90%] rounded" src="./assists/2.jpg" alt="Pics" />
        <img className="w-[90%] rounded" src="./assists/3.jpg" alt="Pics" />
        <img className="w-[90%] rounded" src="./assists/4.jpg" alt="Pics" />
        <img className="w-[90%] rounded" src="./assists/5.jpg" alt="Pics" />
        <img className="w-[90%] rounded" src="./assists/6.jpg" alt="Pics" />
        <img className="w-[90%] rounded" src="./assists/7.jpg" alt="Pics" />
        <img className="w-[90%] rounded" src="./assists/8.jpg" alt="Pics" />
        <img className="w-[90%] rounded" src="./assists/9.jpg" alt="Pics" />
        <img className="w-[90%] rounded" src="./assists/10.jpg" alt="Pics" />
        <img className="w-[90%] rounded" src="./assists/11.jpg" alt="Pics" />
        {/* <img className="w-[90%] rounded" src="./assists/12.jpg" alt="Pics" /> */}
        <img className="w-[90%] rounded" src="./assists/13.jpg" alt="Pics" />
        <img className="w-[90%] rounded" src="./assists/14.jpg" alt="Pics" />
        {/* <img className="w-[90%] rounded" src="./assists/15.jpg" alt="Pics" /> */}
        <img className="w-[90%] rounded" src="./assists/16.jpg" alt="Pics" />
        <img className="w-[90%] rounded" src="./assists/17.jpg" alt="Pics" />
        <img className="w-[90%] rounded" src="./assists/18.jpg" alt="Pics" />
        <img className="w-[90%] rounded" src="./assists/19.jpg" alt="Pics" />

       
      </div>
    </div>
  );
};

export default Photos;
