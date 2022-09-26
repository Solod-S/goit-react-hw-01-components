import user from 'data/user.json';

import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
import { Box } from './Box/Box';
import { Statisics } from './Statistics/Statistics';
import { Profile } from './Profile/Profile';
import { FriendsList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
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
      <TransactionHistory transactions={transactions}></TransactionHistory>
    </Box>
  );
};
