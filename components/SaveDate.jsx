import React from "react";
import CountdownTimerTrad from "./countdownForSaveToCalendar.jsx/CountdownTimerTrad";
import CountdownTimerReli from "./countdownForSaveToCalendar.jsx/CountdownTimerReli";

const SaveDate = () => {
  const addToCalendar = (eventDetails) => {
    const icsData = `
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Your Organization//Your Product//EN
BEGIN:VEVENT
UID:${new Date().getTime()}@yourdomain.com
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").split(".")[0]}Z
DTSTART:${eventDetails.startDate}
DTEND:${eventDetails.endDate}
SUMMARY:${eventDetails.summary}
DESCRIPTION:${eventDetails.description}
LOCATION:${eventDetails.location}
END:VEVENT
END:VCALENDAR`;

    // Create a blob with the ICS data
    const blob = new Blob([icsData], { type: "text/calendar" });

    // Create a link element and trigger the download
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${eventDetails.summary.replace(/\s+/g, "_")}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="SaveDate" className="relative py-8 lg:py-16">
      <div className="grid grid-cols-1  gap-10 lg:grid-cols-2 mx-auto lg:w-[80%] w-[90%]">
      <div className="gap-y-6 py-4 Traditional flex flex-col justify-center items-center">
          <div className="relative z-10">
            <h1 className="text-center font-GreatVibes text-white text-[30px] lg:text-[50px]">
              Traditional Wedding
            </h1>
          </div>
          <div className="uppercase text-white text-center font-bold text-[18px]">
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
          <div className="space-y-4 text-white text-center">
            <p className="font-bold uppercase text-[18px]">
              Which is celebration on
            </p>
            <h1 className="text-[40px] lg:text-[48px] font-serif font-300">23rd of Nov 2024</h1>
            <p className="text-[18px] uppercase font-bold">
              Starting at 2:00 <br />
              in the afternoon
            </p>
          </div>
          <div className="uppercase text-white text-center font-bold text-[18px]">
            <h5>in Fondjomekwet, Cameroon</h5>
          </div>
          <CountdownTimerTrad />
          <div className="">
            <button
              className="text-white text-center font-bold text-[18px] border-[2px] py-3 px-6 rounded-full hover:bg-[#f67e7d] hover:border-[#f67e7d]"
              onClick={() =>
                addToCalendar({
                  startDate: "20241123T140000Z",
                  endDate: "20241123T160000Z",
                  summary: "Traditional Wedding - Linda & Eric",
                  description: "Join us for the traditional wedding ceremony of Linda & Eric.",
                  location: "Fondjomekwet, Cameroon",
                })
              }
            >
              Add to calendar
            </button>
          </div>
        </div>
        <div className="gap-y-6 flex Traditional py-8 flex-col justify-center items-center">
          <div className="relative z-10">
            <h1 className="text-center font-GreatVibes text-white text-[30px] lg:text-[50px]">
              Religieux Wedding
            </h1>
          </div>
          <div className="uppercase text-white text-center font-bold text-[18px]">
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
          <div className="space-y-4 text-white text-center">
            <p className="font-bold uppercase text-[18px]">
              Which is celebration on
            </p>
            <h1 className="text-[40px] lg:text-[48px] font-serif font-300">30th of Nov 2024</h1>
            <p className="text-[18px] uppercase font-bold">
              Starting at 2:00 <br />
              in the afternoon
            </p>
          </div>
          <div className="uppercase text-white text-center font-bold text-[18px]">
            <h5>
              A B C Church <br />
              in Yaounde, Cameroon
            </h5>
          </div>
          
          <CountdownTimerReli />
          <div className="">
            <button
              className="text-white text-center font-bold text-[18px] border-[2px] py-3 px-6 rounded-full hover:bg-[#f67e7d] hover:border-[#f67e7d]"
              onClick={() =>
                addToCalendar({
                  startDate: "20241120T140000Z",
                  endDate: "20241120T160000Z",
                  summary: "Religieux Wedding - Linda & Eric",
                  description: "Join us for the religious wedding ceremony of Linda & Eric.",
                  location: "A B C Church, Yaounde, Cameroon",
                })
              }
            >
              Add to calendar
            </button>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default SaveDate;
