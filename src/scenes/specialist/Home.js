import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text, Button} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView style={[styles.main]}>
        <Text>Home specialist</Text>
        <Button
          title="ArticleListing"
          onPress={() => this.props.navigation.navigate('ArticleListing')}
        />
        <Button
          title="PatientListing"
          onPress={() => this.props.navigation.navigate('PatientListing')}
        />
        <Button
          title="Appointment"
          onPress={() => this.props.navigation.navigate('Appointment')}
        />
        <Button
          title="PatientReferral"
          onPress={() => this.props.navigation.navigate('PatientReferral')}
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
