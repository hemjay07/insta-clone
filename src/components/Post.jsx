import React from "react";
import {
  MoreHoriz as MoreHorizIcon,
  FavoriteBorder as FavoriteBorderIcon,
  ChatBubbleOutline as ChatBubbleOutlineIcon,
  Telegram as TelegramIcon,
  BookmarkBorder as BookmarkBorderIcon,
} from "@mui/icons-material"; // Consolidated icon imports

import { Avatar } from "@mui/material";
import ProfileIcon from "./ProfileIcon";

export default function Post({ user, postImage, likes, timestamp }) {
  return (
    <div className="w-[550px] py-4 mx-10">
      <PostHeader user={user} timestamp={timestamp} />
      <PostImage imageUrl={postImage} />
      <PostActions likes={likes} />
    </div>
  );
}

function PostHeader({ user, timestamp }) {
  return (
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center font-bold">
        <Avatar className="mr-2">
          <ProfileIcon storyBorder />
        </Avatar>
        {user} .
        <span className="text-gray-500 text-sm ml-2"> · {timestamp}</span>
      </div>

      <MoreHorizIcon />
    </div>
  );
}

function PostImage({ imageUrl }) {
  return (
    <img
      src={imageUrl}
      alt="Post"
      className="w-full rounded-md border border-gray-400/60"
    />
  );
}

function PostActions({ likes }) {
  return (
    <div className="mt-2">
      <div className="flex justify-between items-center">
        <div className="flex space-x-3">
          {/* The IconWrapper is used to apply consistent styling to each icon. This keeps the code DRY (Don't Repeat Yourself) by eliminating the need to repeat the className for each icon. */}
          <IconWrapper>
            <FavoriteBorderIcon />
          </IconWrapper>
          <IconWrapper>
            <ChatBubbleOutlineIcon />
          </IconWrapper>
          <IconWrapper>
            <TelegramIcon />
          </IconWrapper>
        </div>

        <IconWrapper>
          <BookmarkBorderIcon />
        </IconWrapper>
      </div>

      <div className="mt-1">Liked by {likes} people.</div>
    </div>
  );
}

function IconWrapper({ children }) {
  return <div className="text-2xl hover:cursor-pointer">{children}</div>;
}
