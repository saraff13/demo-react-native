import React, {Component} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import styles from '../styles/WelcomeStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Icon = MaterialCommunityIcons;

class Welcome extends Component {
  render() {
    return (
      <>
        <SafeAreaView style={[styles.container]}>
          <View style={[styles.leftColumn]}>
            <View style={[styles.IconWrap]}>
              <Icon name="reorder-horizontal" style={[styles.headerIcon]} />
            </View>
            <View style={[styles.specialIconWrap]}>
              <Icon name="home" style={[styles.specialIcon]} />
            </View>
            <View style={[styles.IconWrap]}>
              <Icon name="cellphone" style={[styles.icon]} />
            </View>
            <View style={[styles.IconWrap]}>
              <Icon name="cog" style={[styles.icon]} />
            </View>
            <View style={[styles.IconWrap]}>
              <Icon name="bell" style={[styles.icon]} />
            </View>
            <View style={[styles.IconWrap]}>
              <Icon name="power" style={[styles.icon]} color="red" />
            </View>
          </View>
          <Text style={[styles.signup]}>Sign up</Text>
          <View style={[styles.main]}>
            <Text style={[styles.appName]}>Smart Home</Text>
            <Text style={[styles.welcomeText]}>Welcome</Text>
            <Text style={[styles.welcomeMessage]}>
              Welcome to the team! We are thrilled to have you at our office.
              You're going to be a valuable asset to our company, and we can't
              wait to see all that you accomplish.
            </Text>
            <View style={[styles.inputBox]}>
              <Text style={[styles.inputType]}>First Name</Text>
              <Text style={[styles.dashForInput]}></Text>
            </View>
            <View style={[styles.inputBox]}>
              <Text style={[styles.inputType]}>Last Name</Text>
              <Text style={[styles.dashForInput]}></Text>
            </View>
            <View style={[styles.inputBox]}>
              <Text style={[styles.inputType]}>Email</Text>
              <Text style={[styles.dashForInput]}></Text>
            </View>
            <View style={[styles.inputBox]}>
              <Text style={[styles.inputType]}>Password</Text>
              <Text style={[styles.dashForInput]}></Text>
            </View>
            <Text style={[styles.agreement]}>
              I have read and agree with terms and conditions.
            </Text>
          </View>
        </SafeAreaView>
        <Icon name="crop-square" style={[styles.checkIcon]} />
      </>
    );
  }
}

export default Welcome;
