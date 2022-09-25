import styled from 'styled-components';
export const FriendsListCard = styled.ul`
  margin-bottom: ${p => p.theme.space[5]}px;
`;
export const FriendProfile = styled.li`
  padding: ${p => p.theme.space[3]}px;
  width: 250px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${p => p.theme.colors.white};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 250ms linear;
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
  :hover {
    transform: scale(1.1);
  }
`;
export const FriendStatus = styled.p`
  width: 20px;
  height: 20px;
  background-color: ${p =>
    p.isOnline ? p.theme.colors.online : p.theme.colors.offline};
  border-radius: ${p => p.theme.radii.round};
`;
export const FriendAvatar = styled.img`
  width: 40px;
`;
export const FriendName = styled.p`
  color: ${p => p.theme.colors.primaryText};
  font-weight: ${p => p.theme.fontWeight.bolt};
`;
