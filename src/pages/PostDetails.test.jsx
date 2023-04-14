import { render, screen } from "@testing-library/react";
import { useLocation } from "react-router-dom";

import PostDetails from "./PostDetails";
import "@testing-library/jest-dom/extend-expect";

jest.mock("react-router-dom", () => ({
  useLocation: jest.fn(),
}));

describe("PostDetails component", () => {
  it("should render the post details correctly", () => {
    const post = {
      title: "test post",
      thumbnail: "https://example.com/test-thumbnail.jpg",
      author: "test author",
      url: "https://example.com/test-url",
      created_utc: 1618892100,
      selftext: "test selftext",
      subreddit: "test-subreddit",
      score: 10,
      num_comments: 5,
      all_awardings: [],
    };
    useLocation.mockReturnValue({ state: { post } });

    render(<PostDetails />);

    expect(screen.getByText(post.title)).toBeInTheDocument();
    expect(screen.getByAltText(post.title)).toBeInTheDocument();
    expect(screen.getByText(`Posted by ${post.author}`)).toBeInTheDocument();

    expect(screen.getByText(post.score)).toBeInTheDocument();
    expect(
      screen.getByText(`${post.num_comments} comments`)
    ).toBeInTheDocument();

    expect(screen.getByText("View on Reddit")).toBeInTheDocument();
    expect(screen.getByText(post.selftext)).toBeInTheDocument();
  });

  it("should render the post awards correctly", () => {
    const post = {
      title: "test post",
      thumbnail: "https://example.com/test-thumbnail.jpg",
      author: "test author",
      url: "https://example.com/test-url",
      created_utc: 1618892100,
      selftext: "test selftext",
      subreddit: "test-subreddit",
      score: 10,
      num_comments: 5,
      all_awardings: [
        { id: 1, name: "award1", count: 1 },
        { id: 2, name: "award2", count: 2 },
      ],
    };
    useLocation.mockReturnValue({ state: { post } });

    render(<PostDetails />);

    expect(screen.getByText("Awards")).toBeInTheDocument();
    screen.queryByText(/award1/);
    screen.queryByText(/award2/);
  });
});
