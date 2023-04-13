import Posts from "./pages/Posts";
import PostDetails from "./pages/PostDetails";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/post/:id" element={<PostDetails />} />
      </Routes>
    </div>
  );
}

export default App;
