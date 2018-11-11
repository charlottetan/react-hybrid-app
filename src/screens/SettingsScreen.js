import React from 'react';
import { Platform, StyleSheet } from 'react-native';
let ExpoConfigView = (Platform.OS !== 'web') && require('@expo/samples').ExpoConfigView;
if (!ExpoConfigView) {
  ExpoConfigView = require('./../polyfills-web/ExpoConfigView').default;
}

let headerStyle;

if (Platform.OS === 'web') {
  headerStyle = {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0, 0, 0, .3)'
  };
}

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
    headerTitleContainerStyle: headerStyle,
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ExpoConfigView />;
  }
}
