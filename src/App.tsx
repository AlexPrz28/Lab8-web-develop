import React from "react";
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from "./containers/Header";
import { BrowserRouter } from 'react-router-dom';
import Routes from "./components/Routes";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <BrowserRouter>
          <Header/>
          <Routes />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
