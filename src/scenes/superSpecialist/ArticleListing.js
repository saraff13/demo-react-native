import React, {Component} from 'react';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';

export default class ArticleListing extends Component {
  render() {
    return (
      <SafeAreaView style={[styles.main]}>
        <Text>ArticleListing</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
