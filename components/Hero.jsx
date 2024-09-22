import React from 'react';
import CountdownTimer from './CountdownTimer';

const Hero = () => {
  return (
    <div className='relative z-10 flex flex-col bg-transparent text-white justify-center items-center'>
      <div className='pt-6 lg:pt-0'>
        <img className='lg:w-[200px] w-[150px]' src="./assists/vinesRoseWhite.png" alt="" />
      </div>
      <div className='flex justify-center items-center gap-x-2 lg:gap-x-5'>
        <hr className='py-[.2px] lg:px-16 px-6 bg-white'></hr>
        <p className='uppercase text-[14px] font-thin tracking-[3px] lg:tracking-[14px]'>The wedding of</p>
        <hr className='py-[0.2px] px-6 lg:px-16 bg-white'></hr>
      </div>
      <div className='font-GreatVibes'>
        <h1 className='lg:text-[10rem] text-[54px]'>Linda & Eric</h1>
      </div>
      <div className=' pb-10'>
        <CountdownTimer />
      </div>
    </div>
  );
};

export default Hero;
