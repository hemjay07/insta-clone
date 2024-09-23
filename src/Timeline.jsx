import postsData from "./data/postsData";
import Stories from "./components/Stories";
import Post from "./components/Post";
import Suggestions from "./Suggestions";

export default function Timeline() {
  return (
    <div className="flex border-l dark:border-white/10   border-black/10 ">
      <div className="flex-[0.7]">
        <Stories className="w-[100%]" />
        <div className="divide-y divide-black/10 dark:divide-white/10">
          {postsData.map((post, id) => (
            <Post
              key={id}
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>

      <div className="flex-[0.3]">
        <Suggestions />
      </div>
    </div>
  );
}
