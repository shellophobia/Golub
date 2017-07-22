import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import Header from './containers/Header';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header style={styles.header}></Header>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  header: {
    height: 20,
    backgroundColor: '#222',
  }
});
