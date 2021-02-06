import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Main from './Main';
import Maps from './Maps';
import Settings from './Settings';
export default class Routing extends Component {
  render() {
    return (
      <Router>
        <Scene key='Root'>
            <Scene key="MainPage" component={Main} initial  hideNavBar />
            <Scene key="MapsPage" component={Maps}    hideNavBar />
            <Scene key="Settings" component={Settings}    hideNavBar />
        </Scene>
      </Router>
    )
  }
}
