import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const Rsvp = () => {
    const [guest, setGuest] = useState("");

  const handleChange = (e) => {
    setGuest(e.target.value);
  };

  return (
    <div id="rvsp" className="  bg-[#DCF4E6] py-12">
      <div className=" flex flex-col justify-center items-center">
        <h1 className="lg:text-[90px] text-[50px] text-[#f67e7d] font-GreatVibes">
          Are you attending
        </h1>
      </div>
      <div className="mx-auto border border-black   py-16 rounded bg-white lg:w-[40%] w-[90%]">
        <form className="flex items-center flex-col gap-y-4" action="">
          <input
            type="text"
            placeholder="Name"
            className=" placeholder:px-6 border-gray-400 border w-[80%] h-12"
          />
          <input
            type="text"
            placeholder="Your Email"
            className="placeholder:px-6 border-gray-400 border w-[80%] h-12"
          />
          <div className=" w-[100%]">
            <Box className="mx-auto"  sx={{ maxWidth: '80%' }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Guest</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={guest}
                  label="guest"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>1</MenuItem>
                  <MenuItem value={20}>2</MenuItem>
                  <MenuItem value={30}>3</MenuItem>
                  <MenuItem value={30}>4</MenuItem>
                  <MenuItem value={30}>5</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <textarea className=" placeholder:px-6 border-gray-400 border w-[80%] h-12" name="Message" placeholder="Message" id=""></textarea>

          <button className="transform hover:rotate-6 mt-5 bg-[#f67e7d] rounded-full text-white font-bold px-10 py-4" type="submit">I am Attending</button>
          
        </form>
      </div>
    </div>
  );
};

export default Rsvp;
