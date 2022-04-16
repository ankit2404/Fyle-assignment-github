import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";

import PropTypes from "prop-types";

function RepoItem({ repo }) {
  const {
    name,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;

  return (
    <div className="mb-2 rounded-md card bg-gray-800 hover:bg-gray-900 repos">
      <h3
        className="mb-2 text-xl font-semibold"
        style={{ marginLeft: "15px", marginTop: "10px" }}
      >
        <a
          href={html_url}
          style={{ color: "white" }}
          target="_blank"
          rel="noreferrer"
        >
          <FaLink className="inline mr-1" /> {name}
        </a>
      </h3>
      <div className="card-body">
        <div>
          <div className="mr-2 badge  badge-lg">
            <FaEye className="mr-2" /> {watchers_count}
          </div>
          <div className="mr-2 badge  badge-lg">
            <FaStar className="mr-2" /> {stargazers_count}
          </div>
          <div className="mr-2 badge  badge-lg">
            <FaInfo className="mr-2" /> {open_issues}
          </div>
          <div className="mr-2 badge  badge-lg">
            <FaUtensils className="mr-2" /> {forks}
          </div>
        </div>
      </div>
    </div>
  );
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
