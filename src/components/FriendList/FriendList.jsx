import PropTypes from 'prop-types';
import {
  FriendsListCard,
  FriendProfile,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './FriendList.styled';
export const FriendsList = ({ friends }) => {
  return (
    <FriendsListCard>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendProfile key={id}>
            <FriendStatus isOnline={isOnline}></FriendStatus>
            <FriendAvatar src={avatar}></FriendAvatar>
            <FriendName>{name}</FriendName>
          </FriendProfile>
        );
      })}
    </FriendsListCard>
  );
};
FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
