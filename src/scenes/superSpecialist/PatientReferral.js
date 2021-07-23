import React, {Component} from 'react';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';

export default class PatientReferral extends Component {
  render() {
    return (
      <SafeAreaView style={[styles.main]}>
        <Text>PatientReferral</Text>
        <Button title="Accept" />
        <Button title="Reject" />
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
