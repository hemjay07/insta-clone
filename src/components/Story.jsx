import ProfileIcon from "./ProfileIcon";
import users from "../data/users";

export default function Story() {
  let accountName = users[Math.floor(Math.random() * users.length)].username;

  if (accountName.length > 10) {
    accountName = accountName.substring(0, 10) + "...";
  }

  return (
    <div className="flex flex-col items-center">
      <ProfileIcon iconSize="big" storyBorder={true} />
      <span className="text-sm font-extralight">{accountName}</span>
    </div>
  );
}
