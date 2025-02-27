import React from "react";
import Sidenav from "./Sidenav";
import Timeline from "./Timeline";
import "./Homepage.css"; // Import the custom CSS here

function Homepage() {
  return (
    <div className="bg-white flex text-black dark:bg-black dark:text-white">
      <div className="relative  flex-[0.2]">
        <Sidenav />
      </div>

      <div className="flex-[0.8]">
        <Timeline />
      </div>
    </div>
  );
}

export default Homepage;
