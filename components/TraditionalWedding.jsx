import React from "react";


const TraditionalWedding = () => {
  return (
    <div id="Traditional" className=" py-16 ">
      <div className=" relative z-10">
        <h1 className=" text-center font-GreatVibes text-white text-[50px] lg:text-[80px] ">Traditional Wedding</h1>
      </div>
      {/* <img className='w-[100%] lg:-mt-[8rem]' src="./assists/flowerUpper.jpg" alt="" /> */}
      <div className="grid  grid-cols-1 gap-y-10 lg:grid-cols-2 mx-auto lg:w-[80%] w-[90%] Traditional">
        <div className="flex justify-center py-3">
          <img className="w-[80%]" src="./assists/Traditional.jpg" alt="" />
        </div>
        <div className=" gap-y-6 flex flex-col justify-center items-center">
          <div className="uppercase text-white text-center font-bold  text-[18px]">
            <p>Join us to celebrate</p>
            <p>the wedding day of</p>
          </div>
          <div>
            <h3 className="text-[50px] lg:text-[80px] text-[#f67e7d] font-GreatVibes">
              Linda & Eric
            </h3>
          </div>
          <div className="mt-[-40px]">
            <img
              className="w-[140px]"
              src="./assists/vines_flower_white-removebg.png"
              alt="viens_flower"
            />
          </div>
          <div className="  space-y-4 text-white text-center">
            <p className=" font-bold uppercase text-[18px]">Which is celebration on</p>
            <h1 className=" text-[48px] font-serif font-300">
              23rd of Nov 2024{" "}
            </h1>
            <p className="text-[18px] uppercase font-bold">
              Starting at 2:00 <br />
              in the afternoon
            </p>
          </div>
          <div className="uppercase text-white text-center font-bold  text-[18px]">
            <h5>
             
              in Fondjomekwet, Cameroon
            </h5>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default TraditionalWedding;
