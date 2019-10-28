/**
 * Giftsery Project
 * Author: Emmanuel Columbus Mugenyi
 */

//import liraries
import React, { Component } from 'react';

import SplashScreen from './src/containers/SplashScreen';
import AppIntroSlide from './src/containers/AppIntroSlide';
import Home from './src/containers/Home';

// create a component
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        timePassed: false,
        startMainScreen: false
    };
  }

  componentDidMount() {
      setTimeout( () => {
          this.setTimePassed();
      },3500);
  }

  setTimePassed() {
      this.setState({timePassed: true});
  }

  startMainScreen = () => {
    return <SplashScreen/>;
  }

  render() {
    if (!this.state.timePassed) {
      return <SplashScreen/>;
    } else {
      return <Home/>;
        //return <AppIntroSlide startMainScreen={this.startMainScreen}/>;
    }
  }
}

//make this component available to the app
export default App;
