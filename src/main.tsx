import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Index from './ts/Index.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './ts/store'
import Router from './ts/Router.tsx'
import { CssBaseline } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        {/* <CssBaseline /> TODO: ここでcss効いているか確認する */}
        <Router />
        {/* <Index /> */}
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
)
