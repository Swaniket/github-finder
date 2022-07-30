import { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";
import { searchUsers } from "../../context/github/GithubActions";

function UserSearch() {
  const { users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const [text, setText] = useState("");

  const handleOnChange = (e) => setText(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text === "") {
      setAlert("Please enter a user name", "error");
    } else {
      dispatch({
        type: "SET_LOADING",
      });
      const users = await searchUsers(text);
      if (users.length === 0) {
        setAlert("User doesn't exists", "error");
        dispatch({ type: "END_LOADING" });
        setText("");
      } else {
        dispatch({
          type: "GET_USERS",
          payload: users,
        });
        setText("");
      }
    }
  };

  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
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
            <div className="hero screen">
              <div className="hero-content text-center">
                <div className="max-w-md">
                  <h1 className="text-5xl font-bold">
                    Welcome to GitHub Finder
                  </h1>
                  <p className="py-6">Search by any GitHub username</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}

      <div className="grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8 ml-10 mr-10">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <div className="relative">
                <input
                  className="w-full pr-40 bg-gray-200 input input-lg text-black"
                  placeholder="Username"
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
