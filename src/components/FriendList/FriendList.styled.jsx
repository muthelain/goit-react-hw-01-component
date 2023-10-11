import styled from '@emotion/styled';


export const ListOfFriend = styled.ul`

width: 450px;

margin: auto;
padding-top: 20px;

margin-block-start: 0em;
margin-block-end: 0em;
padding-inline-start: 0px;
`;

export const ListOfFriendItem = styled.li`
  display: flex;
  align-items: center;

  padding: 10px;
  padding-right: 70px;

  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);

  background-color: white;
`;


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