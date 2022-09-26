import user from '../../data/data.json';
import data from '../../data/data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';
import { Box } from '../../components/Box/Box';
import { Statisics } from '../../components/Statistics/Statistics';
import { Profile } from '../../components/Profile/Profile';
import { FriendsList } from '../../components/FriendList/FriendList';
import { TransactionHistory } from '../../components/TransactionHistory/TransactionHistory';
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
// display: flex;
//     flex-direction: column;
//     align-items: center;
