import React from 'react'
import RoomBoard from './RoomBoard';
import { Box } from '@mui/material';
import { DrawerHeader } from '../LeftSideBar/LeftDrawer';

const Home: React.FC = () => {

  return (
    <Box sx={{}}>
      <DrawerHeader />
      <RoomBoard />
    </Box>
  )
}

export default Home;