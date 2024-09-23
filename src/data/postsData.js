function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomPosts(numPosts) {
  const users = [
    "redian_",
    "johndoe",
    "mariussss",
    "kobee_18",
    "random_user",
    "alice",
    "bob",
    "charlie",
    "dave",
    "eve",
  ];

  const timestamps = ["1h", "2h", "3h", "5h", "1d", "2d", "3d", "1w"];

  const posts = [];

  for (let i = 0; i < numPosts; i++) {
    const post = {
      user: users[getRandomInt(0, users.length - 1)],
      postImage: `https://picsum.photos/seed/${i}/400/300`, // Dynamically generate unique images
      likes: getRandomInt(10, 1000), // Random like count between 10 and 1000
      timestamp: timestamps[getRandomInt(0, timestamps.length - 1)],
    };
    posts.push(post);
  }

  return posts;
}

// Generate 50 random posts with dynamic images
const postsData = generateRandomPosts(50);

export default postsData;
