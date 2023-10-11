import PropTypes from 'prop-types';
import {ListOfFriend,
  ListOfFriendItem,
  IsOnlineStatus,
  UserAvatar,
  Username,} from './FriendList.styled';

export const FriendList = ({friends}) => {

  return (

  <ListOfFriend>

  {friends.map(({id,avatar,name,isOnline}) => (

  <ListOfFriendItem key={id}>
    <IsOnlineStatus status={isOnline}/>
    <UserAvatar src={avatar} alt={name}/>
    <Username>{name}</Username>
</ListOfFriendItem>
    ))}

    </ListOfFriend>
  )
}

FriendList.propTypes = {
    
  friends: PropTypes.arrayOf (

      PropTypes.shape({
      id:PropTypes.number.isRequired,
      avatar:PropTypes.string.isRequired,
      name:PropTypes.string.isRequired,
      isOnline:PropTypes.bool.isRequired
  }))
}