import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text, Button} from 'react-native';

export default class AppointmentBooking extends Component {
  render() {
    return (
      <SafeAreaView style={[styles.main]}>
        <Text>Appointment Booking</Text>
        <Button
          title="Appointment Status"
          onPress={() => this.props.navigation.navigate('AppointmentStatus')}
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
