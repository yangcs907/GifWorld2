import React, { Component } from 'react';
import { Route, withRouter, Redirect, Switch } from 'react-router-dom';
//import Auth from './Auth';

import Header from './components/Header';
import Dashboard from './components/Dashboard';
//import Callback from './components/Callback';
//import NotFound from './components/404';


const img = {
  height: "180px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "8px",
  boxShadow:
      "0 0 10px rgba(255,255,255,0.2), -1px 0 10px rgba(255,255,255,0.2), 1px 0 10px rgba(255,255,255,0.2)"
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getStarted: false
    }
  }

  handleStart = () => {
    this.setState({ getStarted: true });
  };

  handleStartFalse = () => {
    this.setState({ getStarted: false});
  };
    render() {

    return (
      <main className="column split">
        <div className="content">

          <Switch>
            <Route path="/dashboard" render={() => (
                  <div>
                  <Header
                    handleStartFalse = {this.handleStartFalse}
                    />
                  <Dashboard />
                </div>


              )} />
            <Route path="/" exact render={() => {
                if (!this.state.getStarted) {
                return (
                  <div className="landing column y-center">

                    <h1>Welcome to GifWorld! Where gifs come true</h1>

                    <p>Looking for a gif? Do a simple search to view and save your favorite gifs</p>
                    <p>Powered by &copy;Giphy</p>

                    <img src="https://media.giphy.com/media/uudzUtVcsLAoo/giphy.gif" alt="tiger woods fist pump" style={img}></img>
                    <br></br>
                    <br></br>
                    <button className="dash-login" onClick={this.handleStart}>Let's Get Started!</button>

                  </div>
                )
              }
                else if (this.state.getStarted) {
                  return (<Redirect to="/dashboard" />)
                }

            }} />


          </Switch>

        </div>

        <footer className="row split y-center">
          <p>&copy; {new Date().getFullYear()} GifWorld by Chris Yang</p>
          <p></p>
        </footer>
      </main>
    );
  }
}


export default withRouter(App);
