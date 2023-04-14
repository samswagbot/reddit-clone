import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Tile from "./Tile";
import "@testing-library/jest-dom/extend-expect";

describe("Tile component", () => {
  const props = {
    author: "Test Author",
    id: "1234",
    thumbnail: "https://test.com/thumbnail.png",
    title: "Test Title",
    created_utc: 1618468783,
    num_comments: 5,
    subreddit: "test_subreddit",
    score: 10,
    url: "https://test.com/post",
  };

  it("renders the author and title correctly", () => {
    render(
      <MemoryRouter>
        <Tile {...props} />
      </MemoryRouter>
    );

    expect(screen.getByText(props.author)).toBeInTheDocument();
    expect(screen.getByText(props.title)).toBeInTheDocument();
  });

  it("renders number of comments correctly", () => {
    render(
      <MemoryRouter>
        <Tile {...props} />
      </MemoryRouter>
    );

    expect(
      screen.getByText(`${props.num_comments} comments`)
    ).toBeInTheDocument();
  });

  it("renders the thumbnail correctly", () => {
    render(
      <MemoryRouter>
        <Tile {...props} />
      </MemoryRouter>
    );

    expect(screen.getByAltText(props.title)).toBeInTheDocument();
  });
});
