import React from 'react'
import Header from './Components/Header';
import Home from './Components/Home';
import Books from './Components/Books'
import Footer from './Components/Footer';
import Solutions from './Components/Solutions'
import Error from './Components/Error'
import Videos from './Components/Videos'
import VideoPlayer11 from './Components/VideoPlayer11'
import VideoPlayer10 from './Components/VideoPlayer10'
import Install from './Components/Install'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../src/App.css'
export default function App() {
  const playStore = () => {
    return window.location.href = "https://play.google.com/store/apps"
}
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" >
            <Home playStore={playStore} />
          </Route>
          <Route path="/books" >
            <Books />
          </Route>
          <Route path="/solutions" >
            <Solutions />
          </Route>
          <Route path="/videos" >
            <Videos />
          </Route>
          <Route path="/videoplayer10" >
            <VideoPlayer10 />
          </Route>
          <Route path="/videoplayer11" >
            <VideoPlayer11 />
          </Route>
          <Route path="/install" >
            <Install playStore={playStore} />
          </Route>
          <Route path="*" >
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}
