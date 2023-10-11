import PropTypes from 'prop-types';
import {
  ProfileCard,
  DescriptionCard,
  Avatar,
  UserName,
  UserTag,
  UserLocation,
  UserStats,
  UserStatsItem,
  UserStatsLabel,
  UserStatsQuantity,
} from './Profile.styled';


export function Profile({ username, tag, location, avatar, stats:{followers,views,likes} }) {
  return (
    <ProfileCard>
      <DescriptionCard>
        <Avatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </DescriptionCard>

      <UserStats>
        <UserStatsItem>
          <UserStatsLabel>Followers</UserStatsLabel>
          <UserStatsQuantity>{followers}</UserStatsQuantity>
        </UserStatsItem>
        <UserStatsItem>
          <UserStatsLabel>Views</UserStatsLabel>
          <UserStatsQuantity>{views}</UserStatsQuantity>
        </UserStatsItem>
        <UserStatsItem>
          <UserStatsLabel>Likes</UserStatsLabel>
          <UserStatsQuantity>{likes}</UserStatsQuantity>
        </UserStatsItem>
      </UserStats>
    </ProfileCard>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};