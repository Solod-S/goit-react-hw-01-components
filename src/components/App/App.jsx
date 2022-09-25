import { Box } from '../Box/Box';
import user from 'data/user.json';

import { Profile } from 'components/Profile/Profile';
export const App = () => {
  return (
    <Box bg="backGroundColor" display="flex" justifyContent="center">
      <Profile user={user} />
    </Box>
  );
};
