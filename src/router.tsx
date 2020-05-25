import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import App from './App'
import Button from './components/baseui/button/DangerButton';
import TicTacToe from './components/TicTacToe/TicTacToe';
import ListOfWords from './components/baseui/listofwords/ListOfWords'

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
            <Button />
          </Route>
          <Route path="/listOfWords">
            <ListOfWords />
          </Route>
        </Switch>
    </Router>
  );
}