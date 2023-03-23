import PropTypes from 'prop-types';
import style from './Profile.module.css';

const Profile = ({ userData }) => {
  const { username, tag, location, stats, avatar } = userData;
  const { followers, likes, views } = stats;

  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img src={avatar} alt="User avatar" className={style.mainAvatar} />
        <p className={style.name}>
          <b>{username}</b>
        </p>
        <p className={style.tag}>@{tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.stats}>
        <li className={style.statsItem}>
          <div className={style.statsBlock}>
            <p className={style.label}>Followers</p>
            <p className={style.quantity}>{followers}</p>
          </div>
        </li>
        <li>
          <div className={style.stats__block}>
            <p className={style.label}>Views</p>
            <p className={style.quantity}>{views}</p>
          </div>
        </li>
        <li>
          <div className={style.statsBlock}>
            <p className={style.label}>Likes</p>
            <p className={style.quantity}>{likes}</p>
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
  stats: PropTypes.objectOf(
    PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    })
  ),
};

export default Profile;
