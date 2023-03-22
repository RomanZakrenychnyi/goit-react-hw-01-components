import FriendListItem from '../FriendListItem/FriendListItem';
import './FriendList.css'

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      <FriendListItem friends={friends} />
    </ul>
  );
};

export default FriendList;
