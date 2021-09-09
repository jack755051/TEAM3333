// 使用套件
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import React, { useState } from 'react'

//頁面
import NotFoundPage from './pages/NotFoundPage'
import Forum from './pages/Forum'
import Home from './pages/Home'
import Login from './pages/Login'
import CommentBox from './pages/CommentBox'

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
              <Router path="/commentbox">
                <CommentBox />
              </Router>
              <Router path="/login">
                <Login auth={auth} setAuth={setAuth}/>
              </Router>
              <Route exact path="/">
                <Home auth={auth} />
              </Route>
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
