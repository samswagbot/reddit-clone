import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import NewReleasesOutlinedIcon from "@mui/icons-material/NewReleasesOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import ForumIcon from "@mui/icons-material/Forum";
import { usePostsContext } from "../context/PostsContext";

export default function PopularPostBar() {
  const { posts, setPosts } = usePostsContext();
  const filterForNewestPost = () => {
    const copyOfPosts = [...posts];
    const sortedArr = copyOfPosts.sort((a, b) => {
      const aDate = new Date(a.data.created * 1000);
      const bDate = new Date(b.data.created * 1000);
      return aDate - bDate;
    });

    setPosts(sortedArr);
  };

  // sorts the post with largest scores to the top
  const sortBasedOnScore = () => {
    const copyOfPosts = [...posts];
    const sortedArr = copyOfPosts.sort((a, b) => b.data.score - a.data.score);
    setPosts(sortedArr);
  };

  const ageOfPostsInSeconds = (post) => {
    const createdAt = new Date(post * 1000);
    const now = new Date();
    return now - createdAt;
  };

  /**
   * In this formula, the number of upvotes is subtracted by
   * the number of downvotes to give a score based on user votes.
   * Then, the age of the post is divided by 45000 seconds(12.5 hours)
   * and raised to the power of 1.5 to give more weight to newer posts.
   * These two scores are added together to give a final "hotness" score,
   * which is used to rank the posts.
   *  */
  const sortByHot = () => {
    const copyOfPosts = [...posts];

    const sortedArr = copyOfPosts.sort((a, b) => {
      const hotA =
        (a.data.ups -
          a.data.downs +
          ageOfPostsInSeconds(a.data.created_utc) / 45000) ^
        1.5;
      const hotB =
        (b.data.ups -
          b.data.downs +
          ageOfPostsInSeconds(b.data.created_utc) / 45000) ^
        1.5;
      return hotA - hotB;
    });

    setPosts(sortedArr);
  };

  /**
   * In this formula, the number of upvotes and downvotes are
   * added together and one is added to avoid division by zero errors.
   * Then, the absolute value of the difference between the upvotes and downvotes
   * is divided by the total number of votes and raised to the power of 1.5.
   * This gives more weight to posts with a larger number of votes and a higher level of disagreement.
   */

  const sortByControversy = () => {
    const copyOfPosts = [...posts];

    const sortedArr = copyOfPosts.sort((a, b) => {
      const controlA =
        ((a.data.ups - a.data.downs + 1) *
          (Math.abs(a.data.ups - a.data.downs) /
            (a.data.ups + a.data.downs + 1))) ^
        1.5;
      const controlB =
        ((b.data.ups - b.data.downs + 1) *
          (Math.abs(b.data.ups - b.data.downs) /
            (b.data.ups + b.data.downs + 1))) ^
        1.5;
      return controlA - controlB;
    });

    setPosts(sortedArr);
  };

  return (
    <div className="rounded-lg md:w-3/5 mx-auto">
      <h2 className="text-lg font-medium mb-2">Popular Posts</h2>
      <div className="flex gap-2">
        <button
          onClick={sortByHot}
          className="text-orange-600 flex mr-2 font-medium hover:text-gray-500"
        >
          <LocalFireDepartmentOutlinedIcon />
          <span className="ml-2 ">Hot</span>
        </button>
        <button
          onClick={filterForNewestPost}
          className="text-orange-600 flex mr-2 font-medium hover:text-gray-500"
        >
          <NewReleasesOutlinedIcon />
          <span className="ml-2">New</span>
        </button>
        <button
          onClick={sortBasedOnScore}
          className="text-orange-600 flex mr-2 font-medium hover:text-gray-500"
        >
          <TrendingUpOutlinedIcon />
          <span className="ml-2">Top</span>
        </button>
        <button
          onClick={sortByControversy}
          className="text-orange-600 flex mr-2 font-medium hover:text-gray-500"
        >
          <ForumIcon />
          <span className="ml-2">Controversial</span>
        </button>
      </div>
    </div>
  );
}
