import React, {Component} from 'react';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';

export default class SpecialistListing extends Component {
  render() {
    return (
      <SafeAreaView style={[styles.main]}>
        <Text>SpecialistListing</Text>
        <Button
          title="Specialist Detail"
          onPress={() => this.props.navigation.navigate('SpecialistDetail')}
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
