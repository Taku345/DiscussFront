import React, { useRef } from 'react';
//Reactのバージョンダウン対応
// import { createRoot } from 'react-dom/client'; //react18から
import { render } from 'react-dom';
import '../css/index.css';
import Home from './components/Home';
import { Provider } from 'react-redux';
import store from './store';
import LeftDrawer, { DrawerHeader } from './components/LeftDrawer';
import { Box, CssBaseline } from '@mui/material';
import LoginTest from './components/LoginTest';
import axios from 'axios';
import Rooms from './components/Rooms';

const Index: React.FC = () => {

  // Laravelのbladeに読み込ませていたときの処理、もう使わない可能性大
  // const metaCsrfToken = document.querySelector("meta[name='csrf-token']") as HTMLMetaElement;
  // const csrfToken = useRef<string>(metaCsrfToken.content);

  return (
    <div className='root'>
      <CssBaseline />
      <Provider store={store}>
        <Box sx={{ display: 'flex', flexGrow: 1 }} className='FlexBox1'>
          <LeftDrawer />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }} className='FlexChild1' >
            <DrawerHeader />
            {/* <Home /> */}
            {/* <Rooms /> */}
            <LoginTest />
          </Box>
        </Box>
      </Provider>
    </div>
  )
}

/* LaravelとReactの分離によりエントリーポイントが変わったので不要に
const container = document.getElementById('index');
if (container) {
  //Reactのバージョンダウン対応
  // const root = createRoot(container);
  // root.render(<Index />);
  render(<Index />, container);
}
*/

export default Index;