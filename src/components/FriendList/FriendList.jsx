import PropTypes from 'prop-types';
import styles from './friendList.module.css';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => (
  <ul className={styles.friend__list}>
    {friends.map(friend => (
      <FriendListItem
        key={friend.id}
        name={friend.name}
        isOnline={friend.isOnline}
        avatar={friend.avatar}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.array,
};
