import React from "react";
import {
  Home as HomeIcon,
  Search as SearchIcon,
  Explore as ExploreIcon,
  Slideshow as SlideshowIcon,
  Chat as ChatIcon,
  FavoriteBorder as FavoriteBorderIcon,
  AddCircleOutline as AddCircleOutlineIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { FaThreads } from "react-icons/fa6";

import ProfileIcon from "./components/ProfileIcon";

export default function Sidenav() {
  return (
    <div className="flex flex-col h-full fixed z-10">
      {/* Instagram Logo */}
      <img
        className="w-[120px] m-6"
        style={{ color: "red" }}
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt="instagram"
      />

      <div className="flex flex-col">
        {/* Create a reuseable SidenavButton component that accepts icon and label as props. Makes the layout more readable and the styling consistent*/}
        <SidenavButton icon={<HomeIcon />} label="Home" />
        <SidenavButton icon={<SearchIcon />} label="Search" />
        <SidenavButton icon={<ExploreIcon />} label="Explore" />
        <SidenavButton icon={<SlideshowIcon />} label="Reels" />
        <SidenavButton icon={<ChatIcon />} label="Messages" />
        <SidenavButton icon={<FavoriteBorderIcon />} label="Notifications" />
        <SidenavButton icon={<AddCircleOutlineIcon />} label="Create" />

        <SidenavButton
          icon={
            <Avatar>
              <ProfileIcon />
            </Avatar>
          }
          label="Profile"
        />
      </div>

      {/* Bottom Menu */}
      <div className="fixed bottom-3 w-full">
        <SidenavButton
          icon={<FaThreads className="w-6 h-6" />}
          label="Threads"
        />
        <SidenavButton icon={<MenuIcon />} label="More" />
      </div>
    </div>
  );
}

function SidenavButton({ icon, label }) {
  return (
    <button className="flex items-center bg-transparent border-0 my-1 mx-2 py-2 px-4 rounded-lg w-full hover:bg-white/20">
      {icon}
      <span className="ml-2 text-lg font-bold">{label}</span>
    </button>
  );
}
