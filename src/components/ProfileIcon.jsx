export default function ProfileIcon({ iconSize, storyBorder }) {
  // A function that generates a random number between a maximum and a minimun
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  let randomId = getRandomInt(1, 70);

  // get a random image from this API
  let profileImage = `https://i.pravatar.cc/150?img=${randomId}`;

  // Define a Tailwind gradient for the story border
  const storyBorderStyle =
    "p-[2px] bg-gradient-to-br from-[#ff7a18] via-[#ff5a5f] to-[#ffc107] rounded-full";

  // Profile icon size mapping using Tailwind classes
  const sizeClasses = {
    small: "w-[25px] h-[25px]",
    medium: "w-[35px] h-[35px]",
    big: "w-[60px] h-[60px]",
  };

  return (
    <div className={`${storyBorder ? storyBorderStyle : ""}`}>
      <img
        className={`rounded-full border-2 border-white ${sizeClasses[iconSize]} hover:cursor-pointer`}
        src={profileImage}
        alt="profile"
      />
    </div>
  );
}
