import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem/FriendListItem';
import { FriendsListCards } from './FriendList.styled';
export const FriendsList = ({ friends }) => {
  return (
    <FriendsListCards>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            key={id}
            isOnline={isOnline}
            src={avatar}
            name={name}
          />
          // <FriendProfile key={id}>
          //   <FriendStatus isOnline={isOnline}></FriendStatus>
          //   <FriendAvatar src={avatar}></FriendAvatar>
          //   <FriendName>{name}</FriendName>
          // </FriendProfile>
        );
      })}
    </FriendsListCards>
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
