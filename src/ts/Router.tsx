import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../css/index.css';
import LeftDrawer, { DrawerHeader } from './components/LeftSideBar/LeftDrawer';
import { Box, CssBaseline } from '@mui/material';
import LoginTest from './components/LoginTest';
import Home from './components/Home/Home';
import { NotFound } from './components/NotFound';

const Router: React.FC = () => {
  return (
    <div className='root'>
      {/* <Box sx={{ display: 'flex', flexGrow: 1 }} className='FlexBox1'> */}
      <Routes>
        <Route path="/" element={<LeftDrawer />}>
          {/* <Route path="/" element={<DrawerHeader />}> */}

          {/* DrawerHeaderはRouteに一つしかコンポーネントを指定できないっぽいので、
          HomeとかLoginTestとかの中にいれる必要があるかも？ */}

          <Route path="home" element={<Home />} />
          <Route path="logintest" element={<LoginTest />} />
          {/* </Route> */}
        </Route>
        {/* <Route path="logintest" element={<LoginTest />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
      {/* <Routes>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }} className='FlexChild1' >
          <DrawerHeader />
          <Home />
          <LoginTest />
        </Box>
      </Routes> */}

      {/* </Box> */}
    </div>
  )
}

export default Router;