import React, {Component} from 'react';
import {Provider} from 'react-redux';
// import Settings from './scenes/Setting';
// import Exercise from './scenes/Exercise';
// import Welcome from './scenes/Welcome';
// import GetStarted from './scenes/GetStarted';
// import Task from './scenes/Task';
// import Calendar from './scenes/Calendar';
import Auth from './navigations/AuthNavigator';
import Pagination from './scenes/Pagination';
import store from './store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Pagination />
      </Provider>
    );
  }
}
