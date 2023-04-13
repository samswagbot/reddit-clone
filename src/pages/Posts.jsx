import Bones from "../components/Bones";
import PopularPostBar from "../components/PopularPostBar";
import Tile from "../components/Tile";
import { usePostsContext } from "../context/PostsContext";

import { usePosts } from "../hooks/usePosts";

export default function Posts() {
  const { loading, error } = usePosts();
  const { posts } = usePostsContext();

  return (
    <div className="bg-gray-50 p-8">
      {!loading && posts ? (
        <div>
          <PopularPostBar />
          {posts.map(({ data: post }) => (
            <Tile key={post.id} {...post} />
          ))}
        </div>
      ) : (
        <Bones />
      )}
      {error && <div className="text-center h-screen">{error}</div>}
    </div>
  );
}
