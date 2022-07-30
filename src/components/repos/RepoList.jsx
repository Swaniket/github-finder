import PropTypes from "prop-types";
import RepoItem from "./RepoItem";
import { motion, AnimatePresence } from "framer-motion";

function RepoList({ repos }) {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">
          {repos.length === 0
            ? "User doesn't have any public repositories"
            : "Latest Repositories"}
        </h2>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout
          >
            {repos.map((repo) => (
              <RepoItem key={repo.id} repo={repo} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default RepoList;
