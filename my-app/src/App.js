// 使用套件
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import React, { useState } from 'react'

//頁面
import NotFoundPage from './pages/NotFoundPage'

// 組合用元件
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MyMainContent from './components/MyMainContent'
import ScrollToTop from './components/ScrollToTop'


function App() {
  const [auth, setAuth] = useState(false)
  return (
    <Router>
      <>
      <MyNavbar auth={auth} />
        <MyMainContent>
          <ScrollToTop>
            <Switch>
              <Router path="/forum">
                <Forum />
              </Router>
              <Router path="*">
                <NotFoundPage />
              </Router>
            </Switch>
          </ScrollToTop>
        </MyMainContent>
      <MyFooter />
      </>
    </Router>
  );
}

export default App;
