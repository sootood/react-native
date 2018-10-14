/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Header from './src/header';
import Options from './src/Options';
import Button from './src/Button';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'Survey'} />
        <Text style={styles.instructions}> Quetion text</Text>
        <Options />
        <Button onPress={() => console.log('click on btn')} >
          Next
        </Button>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303952',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    fontSize: 20,
    color: '#ffffff',
    marginBottom: 50,
    height: 60,
    marginTop: 30
  }
});
