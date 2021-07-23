import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

export default class AppointmentStatus extends Component {
  render() {
    return (
      <SafeAreaView style={[styles.main]}>
        <Text>AppointmentStatus</Text>
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
