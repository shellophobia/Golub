import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native'

export default class Header extends React.Component {
  render() {
    let url = {
      uri: "https://www.plivo.com/assets/dist/img/logo.png?1497277310"
    };
    return (
      <View style={styles.container}>
        <Image source= {url} style={{width: 132, height: 40}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    height: 70,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
