import PropTypes from 'prop-types';
import style from './FriendListItem.module.css';

const FriendListItem = ({ friends }) => {
  return friends.map(({ avatar, id, isOnline, name }) => {
    return (
      <li className={style.item} key={id}>
        {isOnline ? (
          <span className={style.true}></span>
        ) : (
          <span className={style.false}></span>
        )}
        <img
          className={style.avatar}
          src={avatar}
          alt="User avatar"
          width="48"
        />
        <p className={name}>{name}</p>
      </li>
    );
  });
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  name: PropTypes.string,
};

export default FriendListItem;
