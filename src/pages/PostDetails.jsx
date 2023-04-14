import { useLocation } from "react-router-dom";
import SwapVertOutlined from "@mui/icons-material/SwapVertOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import Badges from "../components/Badges";
import { checkIfUrlIsImg } from "../utlis";

export default function PostDetails() {
  const { state } = useLocation();

  const {
    title,
    thumbnail,
    author,
    url,
    created_utc,
    selftext,
    subreddit,
    score,
    num_comments,
    all_awardings,
  } = state.post;
  const date = new Date(created_utc * 1000);

  const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  return (
    <div className="min-h-screen flex flex-col  justify-center">
      <div className="max-w-3xl mx-auto mt-10 mb-20">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-2 text-gray-900">{title}</h1>
          <div className="flex justify-between">
            <div className="flex items-center mb-4 text-gray-500 flex-1">
              <img
                className="h-12 w-12 mr-4 rounded-full"
                src={checkIfUrlIsImg(thumbnail) ? thumbnail : url}
                alt={title}
              />
              <div className="flex-1">
                <span>Posted by {author}</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="block md:inline">
                  created on {formattedDate}
                </span>
                <div className="mt-1">
                  <span>
                    <SwapVertOutlined /> {score}
                  </span>
                  <span className="mx-2 hidden md:inline">|</span>
                  <span className="block md:inline">
                    <CommentOutlinedIcon className="mr-1" />
                    {num_comments} comments
                  </span>
                  <span className="mx-2 hidden md:inline">|</span>
                  <span className="text-xs">
                    subreddit: r/
                    <span>{subreddit}</span>
                  </span>
                </div>
              </div>
            </div>
            {all_awardings.length && (
              <div className="text-gray-800">
                <h1 className=" underline text-right font-bold">
                  Awards
                  <EmojiEventsOutlinedIcon />
                </h1>
                {all_awardings.map((award) => (
                  <Badges key={award.id} award={award} />
                ))}
              </div>
            )}
          </div>
          <p className="text-gray-800">{selftext}</p>
          <div className="mt-4 mb-2">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 font-semibold  hover:text-orange-800"
            >
              View on Reddit
            </a>
          </div>
          {checkIfUrlIsImg(url) && (
            <div className="rounded-lg shadow-lg overflow-hidden">
              <img className="w-full" src={url} alt={title} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
