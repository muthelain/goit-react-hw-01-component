import styled from '@emotion/styled';
export const ProfileCard = styled.div`
width: 300px;
margin: 20px auto;
background-color: rgb(255, 255, 255);
border-radius: 5px;
`;

export const DescriptionCard = styled.div`
text-align: center;
padding: 42px;
`;

export const Avatar = styled.img`
display: block;
margin: 0px auto 10px;
width: 102px;
border-radius: 50%;
`;

export const UserName = styled.p`
font-size: 20px;
font-weight: 700;
margin-bottom: 10px;
`;

export const UserTag = styled.p`
font-size: 14px;
color: gray;
margin-bottom: 10px;
`;

export const UserLocation = styled.p`
font-size: 14px;
color: gray;
margin-bottom: 10px;
`;

export const UserStats = styled.ul`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    width: 100%;
    text-align: center;
    margin: 0px auto;
    padding-inline-start: 0px;
    background-color: rgb(196, 206, 216);
}
`;

export const UserStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50px;
  padding: 15px 20px;
  :not(:last-child) {
    border-right: 1px solid black;
  }
`;

export const UserStatsLabel = styled.span`
display: block;
color: gray;
font-size: 12px;
margin-bottom: 5px;
`;

export const UserStatsQuantity = styled.span`
display: block;
font-weight: 500;
`;