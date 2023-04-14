import { Link } from "react-router-dom";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import SwapVertOutlined from "@mui/icons-material/SwapVertOutlined";

import useMediaQuery from "@mui/material/useMediaQuery";
import { checkIfUrlIsImg } from "../utils";
import { useTimeAgo } from "../hooks/useTimeAgo";
import { Fragment, useMemo } from "react";

export default function Tile(props) {
  const {
    author,
    id,
    thumbnail,
    title,
    created_utc,
    num_comments,
    subreddit,
    score,
    url,
  } = props;
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const createdDaysAgo = useTimeAgo(created_utc);

  return (
    <Link
      state={{ post: props }}
      className="flex flex-col md:flex-row pointer lg:w-3/5 mx-auto mt-6 shadow-xl rounded-lg hover:transform hover:scale-105 hover:ease-in-out bg-white hover:bg-gray-200"
      to={`/post/${id}`}
    >
      <div className="mr-5 flex flex-col justify-center space-y-2 w-full pl-4 pt-4 pb-4">
        <div className="flex">
          <p className="mr-2">{author}</p>

          <span>{createdDaysAgo} ago</span>
        </div>
        <h1 className="md:text-2xl font-bold">{title}</h1>

        <div>
          <span className="mr-5">
            <SwapVertOutlined />
            {score}
          </span>
          <span className="mr-5">
            <CommentOutlinedIcon className="mr-1" />
            {num_comments} comments
          </span>

          <span className="bg-gray-200 p-2 rounded text-xs">
            r/
            <span>{subreddit}</span>
          </span>
        </div>
      </div>

      {!checkIfUrlIsImg(thumbnail) ? (
        <Fragment />
      ) : (
        <img
          style={{
            maxHeight: "600px",
          }}
          className="md:rounded-tr-lg rounded-bl-lg md:rounded-bl-none h-auto rounded-br-lg "
          src={isSmallScreen && checkIfUrlIsImg(url) ? url : thumbnail}
          alt={title}
        />
      )}
    </Link>
  );
}
