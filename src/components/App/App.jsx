import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import { Box } from '../Box/Box';
import { Statisics } from 'components/Statistics/Statistics';
import { Profile } from 'components/Profile/Profile';
import { FriendsList } from 'components/FriendList/FriendList';
export const App = () => {
  return (
    <Box
      bg="backGroundColor"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Profile user={user} />
      <Statisics title="Upload stats" data={data} />
      <FriendsList friends={friends}></FriendsList>
    </Box>
  );
};
// display: flex;
//     flex-direction: column;
//     align-items: center;
