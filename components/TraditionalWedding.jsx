import React from "react";

const TraditionalWedding = () => {
  return (
    <div id="Traditional" className=" py-16 ">
      <div>
        <h1 className=" text-center font-GreatVibes text-[#ffffff] text-[50px] lg:text-[80px] ">Traditional Wedding</h1>
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
          <div className=" uppercase space-y-4 text-white text-center">
            <p className=" font-bold  text-[18px]">Which is celebration on</p>
            <h1 className=" text-[48px] font-serif font-300">
              Nov / 30 / 2024{" "}
            </h1>
            <p className="text-[18px] font-bold">
              Starting at 2:00 <br />
              in the afternoon
            </p>
          </div>
          <div className="uppercase text-white text-center font-bold  text-[18px]">
            <h5>
              A B C Church <br />
              in Fondjomekwet, Cameroon
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TraditionalWedding;
