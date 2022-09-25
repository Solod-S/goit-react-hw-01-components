import PropTypes from 'prop-types';

import {
  ProfileCard,
  ProfileDescription,
  ProfileAvatar,
  ProfileUsername,
  ProfileTag,
  ProfileLocation,
  ProfileStatsList,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ user }) => {
  const { username, tag, location, avatar, stats } = user;

  return (
    <ProfileCard>
      <ProfileDescription>
        <ProfileAvatar src={avatar}></ProfileAvatar>
        <ProfileUsername>{username}</ProfileUsername>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </ProfileDescription>
      <ProfileStatsList>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </ProfileStatsList>
    </ProfileCard>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
