import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";

const CountdownTimer = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Mark the component as mounted to ensure it only renders on the client
    setIsMounted(true);
  }, []);

  // Set the target date for the countdown
  const targetDate = new Date("2024-12-22T00:00:00");

  // Renderer for the countdown
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <div>Time's up!</div>;
    } else {
      // Render the countdown
      return (
        <div
          className="countdown flex justify-center justify-items-center items-center lg:gap-x-10 gap-x-4 lg:text-[56px] text-[20px] font-[500] "
        >
          <div className=" text-center">
            <h2>- {days}</h2>
            <p>Days</p>
          </div>
          <div className=" text-center">
            <h2>{hours}</h2>
            <p>Hours</p>
          </div>
          <div className=" text-center">
            <h2>{minutes}</h2>
            <p>Minutes</p>
          </div>
          <div className=" text-center">
            <h2>{seconds}</h2>
            <p>Seconds</p>
          </div>
        </div>
      );
    }
  };
  if (!isMounted) {
    // Prevent rendering during server-side rendering
    return null;
  }

  return (
    <div className="flex flex-col justify-center items-center text-white p-4">
      <Countdown date={targetDate} renderer={renderer} />
    </div>
  );
};

export default CountdownTimer;
