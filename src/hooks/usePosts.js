import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { usePostsContext } from "../context/PostsContext";

const usePosts = () => {
  const { posts, setPosts } = usePostsContext();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getPosts = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get("https://api.reddit.com/r/pics/hot.json");
      setPosts(res.data.data.children);
    } catch (error) {
      axios.isCancel(error);
      setError(error.message);
    }
    setLoading(false);
  }, [setPosts]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return {
    loading,
    error,
    posts,
  };
};

export { usePosts };
