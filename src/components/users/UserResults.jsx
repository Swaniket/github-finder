import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

import GithubContext from "../../context/github/GithubContext";

import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";

function UserResults() {
  const { users, loading } = useContext(GithubContext);

  if (!loading) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          layout
        >
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 ">
            {users.map((user) => (
              <UserItem key={user.id} user={user} />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;
