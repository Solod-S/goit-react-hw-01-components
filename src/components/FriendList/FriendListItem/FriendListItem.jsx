import PropTypes from 'prop-types';
import {
  FriendCard,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './FriendListItem.styled';
import defaultAvatar from '../../../img/defAvatar.png';
export const FriendListItem = ({
  isOnline = false,
  src = defaultAvatar,
  name,
}) => {
  return (
    <FriendCard>
      <FriendStatus isOnline={isOnline}></FriendStatus>
      <FriendAvatar src={src}></FriendAvatar>
      <FriendName>{name}</FriendName>
    </FriendCard>
  );
};
FriendListItem.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};
