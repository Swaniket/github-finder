import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="card card-compact bg-base-100 image-full glass" style={{borderRadius: "27px", height: "90px"}}>
      <figure style={{filter: "blur(5px)"}}>
        <img src={avatar_url} alt="Backdrop" />
      </figure>
      <div className="flex-row space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full ring ring-primary  ring-offset-base-100 ring-offset-2 shadow w-14 h-14">
              <img src={avatar_url} alt="Profile" />
            </div>
          </div>
        </div>
        <div>
          <h4 className="card-title pl-1">{login}</h4>
          <Link
            className="text-base-content text-opacity-40"
            to={`/user/${login}`}
          >
          <button class="btn btn-xs btn-outline">Visit Profile</button>
            
          </Link>
        </div>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
