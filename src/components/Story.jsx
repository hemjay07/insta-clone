import ProfileIcon from "./ProfileIcon";
import users from "../data/users";

export default function Story() {
  // Randomly select a user
  let accountName = users[Math.floor(Math.random() * users.length)].username;

  // Truncate username if it exceeds 10 characters
  if (accountName.length > 10) {
    accountName = `${accountName.substring(0, 10)}...`;
  }

  return (
    <div className="flex flex-col items-center">
      <ProfileIcon iconSize="big" storyBorder={true} />
      <span className="text-sm font-extralight mt-1">{accountName}</span>
    </div>
  );
}
