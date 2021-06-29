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
//Main file
export default function App() {
  const playStore = () => {
    return window.location.href = "https://play.google.com/store/apps"
  }
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" >
            <Header />
            <Home playStore={playStore} />
            <Footer />
          </Route>
          <Route path="/books" >
            <Header />
            <Books />
            <Footer />
          </Route>
          <Route path="/solutions" >
            <Header />
            <Solutions />
            <Footer />
          </Route>
          <Route path="/videos" >
            <Header />
            <Videos />
            <Footer />
          </Route>
          <Route path="/videoplayer10" >
            <Header />
            <VideoPlayer10 />
            <Footer />
          </Route>
          <Route path="/videoplayer11" >
            <Header />
            <VideoPlayer11 />
            <Footer />
          </Route>
          <Route path="/install" >
            <Header />
            <Install playStore={playStore} />
            <Footer />
          </Route>
          <Route path="*" >
            <Error />
          </Route>
        </Switch>

      </Router>
    </>
  )
}
