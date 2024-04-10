import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Index from './ts/Index.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './ts/store'
import Router from './ts/Router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter> {/*BrowserRouterで囲む*/}
      <React.StrictMode>
        <Router />
        {/* <Index /> */}
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
)
