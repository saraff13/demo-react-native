import React, {Component} from 'react';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';

export default class PatientListing extends Component {
  render() {
    return (
      <SafeAreaView style={[styles.main]}>
        <Text>PatientListing</Text>
        <Button
          title="Patient Detail"
          onPress={() => this.props.navigation.navigate('PatientDetail')}
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
