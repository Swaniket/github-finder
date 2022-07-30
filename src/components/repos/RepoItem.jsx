import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import PropTypes from "prop-types";
import {
  FaEye,
  FaInfo,
  FaLink,
  FaUtensils,
  FaCopy,
  FaCheck,
} from "react-icons/fa";

function RepoItem({ repo }) {
  const [copySuccess, setCopySuccess] = useState(false);

  console.log("repo", repo);

  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    clone_url,
    topics,
  } = repo;

  const copyToClipbord = () => {
    setCopySuccess(true);

    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  };

  return (
    <div className="mb-2 hover:bg-base-300 mockup-code">
      <div className="card-body">
        <h3
          className="mb-2 text-xl font-semibold"
          style={{ marginTop: "-20px" }}
        >
          <div>
            <a href={html_url} target="_blank" rel="noreferrer">
              <FaLink className="inline mr-1" /> {name}
            </a>

            <CopyToClipboard text={clone_url} onCopy={copyToClipbord}>
              {copySuccess ? (
                <button disabled className="btn ml-6 mt-2 btn-sm glass">
                  <FaCheck className="mr-2" /> Copied!
                </button>
              ) : (
                <button
                  className="btn ml-6 mt-2 btn-sm btn-outline btn-success"
                  onClick={copyToClipbord}
                >
                  <FaCopy className="mr-2" /> Copy Clone URL
                </button>
              )}
            </CopyToClipboard>
          </div>
        </h3>

        <div>
          {topics &&
            topics.map((topic) => (
              <div className="mr-2 badge m-1 badge-lg badge-primary">{topic}</div>
            ))}
        </div>

        <p className="mb-3">{description}</p>
        <div>
          <span className="tooltip" data-tip="Watcher Count">
            <div className="mr-2 badge badge-info badge-outline glass">
              <FaEye className="mr-2" /> {watchers_count}
            </div>
          </span>
          <span className="tooltip" data-tip="Open Issues">
            <div className="mr-2 badge badge-error badge-outline glass">
              <FaInfo className="mr-2" /> {open_issues}
            </div>
          </span>
          <span className="tooltip" data-tip="Forks">
            <div className="mr-2 badge badge-warning badge-outline glass">
              <FaUtensils className="mr-2" /> {forks}
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
