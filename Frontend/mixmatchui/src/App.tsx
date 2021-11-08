import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import data from './Themes/Schema.json'
import HomeComponent from './Layouts/HomeLayout';
import { SignInComponent, SignUpComponent } from './Layouts/AuthLayouts';

function App() {
  var LoggedIn:boolean = false
  const themes = data;
  return (
    <div className="App">
        <ThemeProvider theme={themes.default}>
          <BrowserRouter>
            <Route path="/" exact 
            render={props=>(
              <HomeComponent ShowAuthIn={!LoggedIn}/>
            )}
            />
            <Route path="/Auth/Signin" exact component={SignInComponent}/>
            <Route path="/Auth/Signup" exact component={SignUpComponent}/>
          </BrowserRouter>
        </ThemeProvider>
    </div>
  );
}

export default App;
