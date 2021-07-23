import React, {Component} from 'react';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';

export default class PublishArticles extends Component {
  render() {
    return (
      <SafeAreaView style={[styles.main]}>
        <Text>Publish Articles</Text>
        <Button title="Add" />
        <Button title="Update" />
        <Button title="Delete" />
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
