import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import type {} from 'styled-components/cssprop';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    background-color: rgb(255,255,254);
    *:focus{
      outline: 0;
    }
    user-select: none;
  }
  a{
    display: inline-flex;
    text-decoration: none;
    color:inherit;
    justify-content: center;
    align-items: center;
    font-size: inherit;
    height:100%;
  }
  html{
    height: auto;
    min-height: 100%;
    height:100vh;
  }
  #root{
    min-height:100vh;
    width:100%;
    height:100%;
  } 
  .App{
    min-height: 100%;
    height:100vh;
  }
`

ReactDOM.render(
  <React.StrictMode>
      <GlobalStyle />
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
