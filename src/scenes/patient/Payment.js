import React, {Component} from 'react';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';

export default class Payment extends Component {
  render() {
    return (
      <SafeAreaView style={[styles.main]}>
        <Text>Payment</Text>
        <Button title="Pay your bill" />
        <Button
          title="Upload Docs"
          onPress={() => this.props.navigation.navigate('DocumentUpload')}
        />
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
