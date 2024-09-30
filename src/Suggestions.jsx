import ProfileIcon from "./components/ProfileIcon";
import { Avatar } from "@mui/material";

export default function Suggestions() {
  const suggestionsData = [
    { username: "_JohnDoe", subtitle: "New to Instagram" },
    { username: "Mahone", subtitle: "Followed by Carter" },
    { username: "0x-John", subtitle: "Follwed by Chisom + 2 others" },
    { username: "JaneSmith", subtitle: "New to Instagram" },
    { username: "Smith_", subtitle: "Followed by Mujeeb" },
  ];

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
      <div className="text-gray-500 font-bold mt-4">Suggestions for you</div>

      {/* The SuggestionItem component encapsulates the repeated structure for each suggested profile, making the code DRY and easier to maintain. */}
      {suggestionsData.map((suggestion, index) => (
        <SuggestionItem
          key={index}
          username={suggestion.username}
          subtitle={suggestion.subtitle}
        />
      ))}
    </div>
  );
}

function SuggestionItem({ username, subtitle }) {
  return (
    <div className="flex justify-between mt-4">
      <div className="flex">
        <Avatar>
          <ProfileIcon />
        </Avatar>
        <div className="flex flex-col ml-2">
          <span className="font-semibold text-sm">{username}</span>
          <span className="text-gray-500 text-xs">{subtitle}</span>
        </div>
      </div>
      <button className="text-blue-500 font-bold bg-transparent border-0 mr-1 hover:text-white">
        Follow
      </button>
    </div>
  );
}
