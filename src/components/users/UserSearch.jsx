import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";

function UserSearch() {
  const { users } = useContext(GithubContext);
  const [text, setText] = useState("");

  const handleOnChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      alert("Please enter a user name");
    } else {
      // @TODO - Search Users
      setText("");
    }
  };

  return (
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
          <button className="btn btn-ghost btn-lg">Clear</button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
