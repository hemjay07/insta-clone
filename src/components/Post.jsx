import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ProfileIcon from "./ProfileIcon";

export default function Post({ user, postImage, likes, timestamp }) {
  return (
    <div className="w-[550px] py-4 mx-10">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center font-bold">
          <Avatar className="mr-2">
            <ProfileIcon storyBorder={true} />
          </Avatar>
          {user} .{" "}
          <span className="text-gray-500 text-sm ml-2"> {timestamp}</span>
        </div>
        <MoreHorizIcon />
      </div>

      <div>
        <img
          src={postImage}
          alt="Post"
          className="w-full rounded-md border border-gray-400/60"
        />
      </div>

      <div className="mt-2">
        <div className="flex justify-between items-center">
          <div className="flex space-x-3">
            <FavoriteBorderIcon className="text-2xl hover:cursor-pointer" />
            <ChatBubbleOutlineIcon className="text-2xl hover:cursor-pointer" />
            <TelegramIcon className="text-2xl hover:cursor-pointer" />
          </div>
          <div>
            <BookmarkBorderIcon className="text-2xl hover:cursor-pointer" />
          </div>
        </div>
        <div className="mt-1">Liked by {likes} people.</div>
      </div>
    </div>
  );
}
