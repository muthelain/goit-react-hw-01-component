import styled from '@emotion/styled';

export const IsOnlineStatus = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: ${props => {
    if (props.isOnline) {
      return 'green';
    }
    return 'red';
  }};

  margin-right: 10px;
`;

export const UserAvatar = styled.img`
width:48px;
`;

export const Username = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

export const FriendItem = styled.li`
  padding: 8px;
  display: flex;
  gap: 16px;
  align-items: center;
  background-color: white;
`;