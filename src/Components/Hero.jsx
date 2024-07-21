import React from "react";

const Hero = () => {
  return (
    <div className="h-screen  w-screen flex flex-col md:flex-row">
      <div className="min-h-1/2 mt-7 sm:mt-0 w-screen md:h-full md:w-1/2">
        <div className="w-full p-5 md:p-10">
          <h1 className="text-5xl font-semibold md:mt-12">
            Complete health <br /> care solution for <br /> Everyone
          </h1>
          <p className="mt-5 md:mt-9">
            We're always available for our Patients with emergen Problem. You
            can easily reach us 24/7. We focused on Highest Quality.
          </p>
          <button className="mt-3 text-lg font-semibold h-14 px-5  bg-green-600 text-white rounded-xl hover:bg-green-800 md:mt-9">
            Make a Appointment
          </button>
        </div>
      </div>
      <div className="h-1/2 mt-[20vh] sm:mt-0  w-screen md:h-full md:w-1/2">
        <div className="h-full w-full flex relative items-center justify-center">
          <img
            className="h-[60vh] md:h-full absolute z-30 "
            src="./doctor.png"
            alt="img"
          />
          <img
            className="h-1/2 md:h-1/2 absolute z-20 mt-8 "
            src="./yellowBox.png"
            alt="img"
          />
          <img
            className="h-2/3 md:h-2/3 absolute mt-8  "
            src="./greenBox.png"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
