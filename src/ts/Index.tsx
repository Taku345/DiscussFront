import React from 'react';
import '../css/index.css';
import { Provider } from 'react-redux';
import store from './store';
import LeftDrawer, { DrawerHeader } from './components/LeftSideBar/LeftDrawer';
import { Box, CssBaseline } from '@mui/material';
import LoginTest from './components/LoginTest';
import Home from './components/Home/Home';

const Index: React.FC = () => {

  return (
    <div className='root'>
      <CssBaseline />
      <Provider store={store}>
        <Box sx={{ display: 'flex', flexGrow: 1 }} className='FlexBox1'>
          <LeftDrawer />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }} className='FlexChild1' >
            <DrawerHeader />
            <Home />
            {/* <Room /> */}
            <LoginTest />
          </Box>
        </Box>
      </Provider>
    </div>
  )
}

export default Index;