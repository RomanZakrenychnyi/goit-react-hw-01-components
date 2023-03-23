import FriendListItem from '../FriendListItem/FriendListItem';
import style from './FriendList.module.css'

const FriendList = ({ friends }) => {
  return (
    <ul className={style.friendList}>
      <FriendListItem friends={friends} />
    </ul>
  );
};

export default FriendList;
