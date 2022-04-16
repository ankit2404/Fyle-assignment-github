import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./pagination.css";
function RepoPagination({ repos }) {
  const [pages, setPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(null);
  const [user, setUser] = useState(null);
  const param = useParams();
  useEffect(() => {
    setPages(Math.ceil(repos / 6));
    setUser(param.login);
    setPageNumber(param.page.split("=")[1]);
  }, [param.login, param.page, repos]);

  const onclick = () => {
    window.scrollTo({ top: 300, behavior: "smooth" });
  };
  return (
    <div className="projects">
      <div className="pagination">
        <ul className="pagination-container">
          {pageNumber > 1 && (
            <Link
              to={`/user/${user}/page=${pageNumber - 1}`}
              className="btn "
              onClick={onclick}
            >
              &#10094; Prev
            </Link>
          )}
          {pages &&
            Array(pages)
              .fill(1)
              .map((_, idx) => (
                <li key={uuidv4()}>
                  <Link
                    to={`/user/${user}/page=${idx + 1}`}
                    className="btn "
                    onClick={onclick}
                  >
                    {idx + 1}
                  </Link>
                </li>
              ))}
          {pageNumber < pages && (
            <li>
              <Link
                to={`/user/${user}/page=${parseInt(pageNumber) + 1}`}
                className="btn"
                onClick={onclick}
              >
                Next &#10095;
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default RepoPagination;
