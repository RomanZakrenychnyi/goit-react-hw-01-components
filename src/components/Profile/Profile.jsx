import PropTypes from "prop-types";
import './Profile.css';

const Profile = ({ userData }) => {
  const { username, tag, location, stats, avatar } = userData;
  const { followers, likes, views } = stats;

  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="mainAvatar" />
        <p className="name"><b>{username}</b></p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li className="stats__item">
          <div className="stats__block">
            <p className="label">Followers</p>
            <p className="quantity">{followers}</p>
          </div>
        </li>
        <li>
          <div className="stats__block">
          <p className="label">Views</p>
          <p className="quantity">{views}</p>
          </div>
        </li>
        <li>
          <div className="stats__block">
          <p className="label">Likes</p>
        <p className="quantity">{likes}</p>
        </div>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number)
};

export default Profile;
