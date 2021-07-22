import React, {Component} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import styles from '../styles/GetStartedStyle';

class GetStarted extends Component {
  render() {
    return (
      <SafeAreaView style={[styles.container]}>
        <View style={[styles.main]}>
          <View style={[styles.empty]}></View>
          <Text style={[styles.headline]}>Manage your daily tasks</Text>
          <Text style={[styles.description]}>
            Team and project management with solution providing app
          </Text>
          <Text style={[styles.startButton]}>Get Started</Text>
        </View>

        <Image
          source={require('../assests/images/design.png')}
          style={[styles.image]}
        />
      </SafeAreaView>
    );
  }
}

export default GetStarted;
