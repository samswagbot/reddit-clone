import { createContext, useContext, useState } from "react";

const PostsContext = createContext({});

export function usePostsContext() {
  return useContext(PostsContext);
}

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState(null);

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostsContext.Provider>
  );
};
