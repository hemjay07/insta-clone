import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { FaThreads } from "react-icons/fa6";

import { Avatar } from "@mui/material";
import ProfileIcon from "./components/ProfileIcon";

export default function Sidenav() {
  return (
    <div className="flex flex-col h-full fixed z-10 ">
      <img
        style={{ width: "120px", margin: "24px", color: "black" }}
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt="instagram"
      />
      <div className="flex flex-col">
        <button className="flex items-center  bg-transparent border-0 my-1 mx-2 py-2 px-4 rounded-lg w-full hover:bg-white/20">
          <HomeIcon />
          <span className="ml-2 text-lg font-bold">Home</span>
        </button>
        <button
          className="flex items-center
 bg-transparent border-0 my-1 mx-2 py-2 px-4 rounded-lg w-full hover:bg-white/20"
        >
          <SearchIcon />
          <span className="ml-2 text-lg font-bold">Search</span>
        </button>
        <button
          className="flex items-center 
 bg-transparent border-0 my-1 mx-2 py-2 px-4 rounded-lg w-full hover:bg-white/20"
        >
          <ExploreIcon />
          <span className="ml-2 text-lg font-bold">Explore</span>
        </button>
        <button
          className="flex items-center 
 bg-transparent border-0 my-1 mx-2 py-2 px-4 rounded-lg w-full hover:bg-white/20"
        >
          <SlideshowIcon />
          <span className="ml-2 text-lg font-bold">Reels</span>
        </button>
        <button
          className="flex items-center 
 bg-transparent border-0 my-1 mx-2 py-2 px-4 rounded-lg w-full hover:bg-white/20"
        >
          <ChatIcon />
          <span className="ml-2 text-lg font-bold">Messages</span>
        </button>
        <button
          className="flex items-center 
 bg-transparent border-0 my-1 mx-2 py-2 px-4 rounded-lg w-full hover:bg-white/20"
        >
          <FavoriteBorderIcon />
          <span className="ml-2 text-lg font-bold">Notifications</span>
        </button>
        <button
          className="flex items-center 
 bg-transparent border-0 my-1 mx-2 py-2 px-4 rounded-lg w-full hover:bg-white/20"
        >
          <AddCircleOutlineIcon />
          <span className="ml-2 text-lg font-bold">Create</span>
        </button>
        <button
          className="flex items-center 
 bg-transparent border-0 my-1 mx-2 py-2 px-4 rounded-lg w-full hover:bg-white/20"
        >
          <Avatar>
            <ProfileIcon />
          </Avatar>
          <span className="ml-2 text-lg font-bold flex justify-between w-full">
            Profile
          </span>
        </button>
      </div>
      <div className="fixed bottom-3  flex flex-col">
        <button
          className="flex items-center 
 bg-transparent border-0 my-1 mx-2 py-2 px-4 rounded-lg w-full hover:bg-white/20"
        >
          <FaThreads className="w-6 h-6" />
          <span className="ml-2 text-lg font-bold">Threads</span>
        </button>
        <button
          className="flex items-center 
 bg-transparent border-0 my-1 mx-2 py-2 px-4 rounded-lg w-full hover:bg-white/20"
        >
          <MenuIcon />
          <span className="ml-2 text-lg font-bold">More</span>
        </button>
      </div>{" "}
    </div>
  );
}
