import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./UserItem.css";
function UserItem({ user: { login, avatar_url } }) {
  return (
    <Link to={`/user/${login}/page=1`}>
      <div className="card shadow-md compact side bg-base-100 myspecial">
        <div className="flex-row items-center space-x-4 card-body">
          <div>
            <div className="avatar">
              <div className="rounded-full shadow w-14 h-14">
                <img src={avatar_url} alt="Profile" />
              </div>
            </div>
          </div>
          <div>
            <h2 className="card-title">{login}</h2>
            <div
              className="text-base-content text-opacity-40"
              // to={`/user/${login}`}
            >
              Visit Profile
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
