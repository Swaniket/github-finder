import { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";

function UserSearch() {
  const { users, searchUsers, clearSearchResults } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const [text, setText] = useState("");

  const handleOnChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      setAlert("Please enter a user name", "error");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  const clearUsers = () => {
    clearSearchResults();
  };

  return (
    <>
      {users.length === 0 && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout
          >
            <div class="hero screen">
              <div class="hero-content text-center">
                <div class="max-w-md">
                  <h1 class="text-5xl font-bold">Welcome to GitHub Finder</h1>
                  <p class="py-6">Search by any GitHub username</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}

      <div className="grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <div className="relative">
                <input
                  className="w-full pr-40 bg-gray-200 input input-lg text-black"
                  placeholder="Enter an username"
                  value={text}
                  onChange={handleOnChange}
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
        {users.length > 0 && (
          <div>
            <button className="btn btn-ghost mt-3" onClick={clearUsers}>
              Clear
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default UserSearch;
