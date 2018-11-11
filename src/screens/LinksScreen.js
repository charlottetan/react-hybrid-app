import React from 'react';
import { Platform, ScrollView, StyleSheet } from 'react-native';
let ExpoLinksView = (Platform.OS !== 'web') && require('@expo/samples').ExpoLinksView;
if (!ExpoLinksView) {
  ExpoLinksView = require('./../polyfills-web/ExpoLinksView').default;
}

let headerStyle;

if (Platform.OS === 'web') {
  headerStyle = {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0, 0, 0, .3)'
  };
}

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
    headerTitleContainerStyle: headerStyle,
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <ExpoLinksView />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
