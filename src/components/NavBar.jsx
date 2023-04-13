import RedditIcon from "@mui/icons-material/Reddit";
export default function NavBar() {
  return (
    <nav className="bg-orange-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-white text-2xl font-bold">
              <RedditIcon className="mr-1" />
              reddit
            </a>
          </div>
          <div className="hidden md:block">
            <button className="text-white hover:text-orange-900 px-3 py-2 rounded-md">
              Login
            </button>

            <button className="bg-white text-gray-800 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
