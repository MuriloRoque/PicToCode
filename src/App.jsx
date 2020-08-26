import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import CameraPage from './pages/CameraPage';
import './asset/main.css';
import Header from './components/header'

function App() {
  const [text, setText] = useState(null);

  return (
    <BrowserRouter>
			<Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/camera" component={CameraPage} >
          <CameraPage text={text} setText={setText} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;


