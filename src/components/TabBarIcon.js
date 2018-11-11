import React from 'react';
import { Platform } from 'react-native';

let Icon = (Platform.OS !== 'web') && require('expo').Icon;
if (!Icon) {
    Icon = require('./../polyfills-web/Icon');
}

import Colors from '../constants/Colors';

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Icon.Ionicons
        name={this.props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}