import PropTypes from 'prop-types';
import './FriendListItem.css'

const FriendListItem = ({ friends }) => {
  return friends.map(({ avatar, id, isOnline, name }) => {
    return (
      <li className="item" key={id}>
        {isOnline ? <span className="status true"></span> : <span className="status false"></span>}
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </li>
    );
  });
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  name: PropTypes.string
}

export default FriendListItem;
