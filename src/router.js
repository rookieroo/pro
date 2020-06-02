import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Loading from './components/baseui/loading/loading'

const App = lazy(() => import('./App'));
const DangerButton = lazy(() => import('./components/baseui/button/DangerButton'));
const TicTacToe = lazy(() => import('./components/TicTacToe/TicTacToe'));
const ListOfWords = lazy(() => import('./components/baseui/listofwords/ListOfWords'));
const Theme = lazy(() => import('./components/baseui/theme/theme'));
const Modal = lazy(() => import('./components/baseui/modal/Modal'));
const Clock = lazy(() => import('./components/baseui/clock/Clock'));

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <Suspense fallback={<Loading/>}>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/tictactoe">
            <TicTacToe />
          </Route>
          <Route path="/button">
            <DangerButton />
          </Route>
          <Route path="/listOfWords">
            <ListOfWords words={['marklar']} />
          </Route>
          <Route path="/theme">
            <Theme />
          </Route>
          <Route path="/modal">
            <Modal />
          </Route>
          <Route path="/clock">
            <Clock />
          </Route>
        </Switch>
        </Suspense>
    </Router>
  );
}