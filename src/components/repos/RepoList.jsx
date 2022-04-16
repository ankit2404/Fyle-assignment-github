import PropTypes from "prop-types";
import RepoItem from "./RepoItem";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RepoPagination from "./RepoPagination.jsx";
import axios from "axios";
import Spinner from "../layout/Spinner";

function RepoList({ repos }) {
  const [loading, setLoading] = useState(true);
  const [repoData, setRepoData] = useState();
  const [page, setPage] = useState();
  const params = useParams();
  useEffect(() => {
    setLoading(true);
    setPage(params.page);
    const getRepos = async () => {
      const data1 = await axios(
        `https://api.github.com/users/${params.login}/repos?${page}&per_page=6`
      );
      setRepoData(data1.data);
    };
    getRepos();
    setLoading(false);
  }, [page, params.login, params.page, setLoading]);
  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <div className="rounded-lg shadow-lg card bg-base-100">
        <h2 className="text-3xl my-4 font-bold card-title">
          Latest Respositories
        </h2>
        <div className="card-body">
          {repoData &&
            repoData.map((repo) => <RepoItem key={repo.id} repo={repo} />)}
        </div>
        <RepoPagination repos={repos.length} />
      </div>
    </>
  );
}

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default RepoList;
