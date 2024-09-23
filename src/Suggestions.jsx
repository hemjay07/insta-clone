import ProfileIcon from "./components/ProfileIcon";
import { Avatar } from "@mui/material";
export default function Suggestions() {
  return (
    <div className="mt-8 mr-8">
      <div className="flex">
        <span>
          <ProfileIcon iconSize="small" />
        </span>
        <div className="flex flex-col ml-2">
          <span className="font-semibold text-sm">Mujeeb</span>
          <span className="text-gray-500 text-xs">hemjay07</span>
        </div>
      </div>
      <div className="text-gray-500 font-bold">Suggestions for you</div>
      <div className="flex justify-between mt-4">
        <div className="flex">
          <span>
            <Avatar>
              <ProfileIcon />
            </Avatar>
          </span>
          <div className="flex flex-col ml-2">
            <span className="font-semibold text-sm">JohnDoe</span>
            <span className="text-gray-500 text-xs">New to instagram</span>
          </div>
        </div>
        <button className="text-blue-500 font-bold bg-transparent border-0 mr-1 hover:text-white">
          Follow
        </button>
      </div>
      <div className="flex justify-between mt-4">
        <div className="flex">
          <span>
            <Avatar>
              <ProfileIcon />
            </Avatar>
          </span>
          <div className="flex flex-col ml-2">
            <span className="font-semibold text-sm">JohnDoe</span>
            <span className="text-gray-500 text-xs">New to instagram</span>
          </div>
        </div>
        <button className="text-blue-500 font-bold bg-transparent border-0 mr-1 hover:text-white">
          Follow
        </button>
      </div>
      <div className="flex justify-between mt-4">
        <div className="flex">
          <span>
            <Avatar>
              <ProfileIcon />
            </Avatar>
          </span>
          <div className="flex flex-col ml-2">
            <span className="font-semibold text-sm">JohnDoe</span>
            <span className="text-gray-500 text-xs">New to instagram</span>
          </div>
        </div>
        <button className="text-blue-500 font-bold bg-transparent border-0 mr-1 hover:text-white">
          Follow
        </button>
      </div>
      <div className="flex justify-between mt-4">
        <div className="flex">
          <span>
            <Avatar>
              <ProfileIcon />
            </Avatar>
          </span>
          <div className="flex flex-col ml-2">
            <span className="font-semibold text-sm">JohnDoe</span>
            <span className="text-gray-500 text-xs">New to instagram</span>
          </div>
        </div>
        <button className="text-blue-500 font-bold bg-transparent border-0 mr-1 hover:text-white">
          Follow
        </button>
      </div>
      <div className="flex justify-between mt-4">
        <div className="flex">
          <span>
            <Avatar>
              <ProfileIcon />
            </Avatar>
          </span>
          <div className="flex flex-col ml-2">
            <span className="font-semibold text-sm">JohnDoe</span>
            <span className="text-gray-500 text-xs">New to instagram</span>
          </div>
        </div>
        <button className="text-blue-500 font-bold bg-transparent border-0 mr-1 hover:text-white">
          Follow
        </button>
      </div>
      <div className="flex justify-between mt-4">
        <div className="flex">
          <span>
            <Avatar>
              <ProfileIcon />
            </Avatar>
          </span>
          <div className="flex flex-col ml-2">
            <span className="font-semibold text-sm">JohnDoe</span>
            <span className="text-gray-500 text-xs">New to instagram</span>
          </div>
        </div>
        <button className="text-blue-500 font-bold bg-transparent border-0 mr-1 hover:text-white">
          Follow
        </button>
      </div>
    </div>
  );
}
