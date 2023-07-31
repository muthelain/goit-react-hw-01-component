import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import {ListOfFriend} from './FriendList.styled';

export function FriendList({ friends }) {
    return (
      <ListOfFriend>
        {friends.map(friend => {
          return FriendListItem(friend);
        })}
      </ListOfFriend>
    );
  }

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        namee: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
      })
    ),
  };