
import { FriendItem  ,IsOnlineStatus,
    UserAvatar,
    Username, } from './FriendListItem.styled';


export function FriendListItem({isOnline, avatar, name}) {
  return (
    <FriendItem>
        <IsOnlineStatus status={isOnline}/>
        <UserAvatar src={avatar} alt={name}/>
        <Username>{name}</Username>
    </FriendItem>
      )
}