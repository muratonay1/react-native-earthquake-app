import React, { Component } from 'react';
import {View} from 'react-native';
console.disableYellowBox = true;
import Routing from './Routing';
export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Routing/>
      </View>
    )
  }
}
