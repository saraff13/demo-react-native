import React, {Component} from 'react';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView style={[styles.main]}>
        <Text>Home patient</Text>
        <Button
          title="listing"
          onPress={() => this.props.navigation.navigate('SpecialistListing')}
        />
        <Button
          title="Appointment"
          onPress={() => this.props.navigation.navigate('AppointmentBooking')}
        />
        <Button
          title="Payment"
          onPress={() => this.props.navigation.navigate('Payment')}
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
