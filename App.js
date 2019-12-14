//import liraries
import React, { Component } from 'react';
import Giftsery from './Giftsery';
import { Provider } from 'react-redux'

import store from './src/store';

// create a component
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Giftsery />
      </Provider>
    );
  }
}

//make this component available to the app
export default App;
