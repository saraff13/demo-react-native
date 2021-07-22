import React, {Component} from 'react';
import {Image, SafeAreaView, Settings, Text, View} from 'react-native';
import styles from '../styles/SettingsStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Icon = MaterialCommunityIcons;

class Setting extends Component {
  render() {
    return (
      <>
        <SafeAreaView style={[styles.container]}>
          <View style={[styles.leftColumn]}>
            <View style={[styles.IconWrap]}>
              <Icon name="reorder-horizontal" style={[styles.headerIcon]} />
            </View>
            <View style={[styles.IconWrap]}>
              <Icon name="home" style={[styles.icon]} />
            </View>
            <View style={[styles.IconWrap]}>
              <Icon name="cellphone" style={[styles.icon]} />
            </View>
            <View style={[styles.IconWrap]}>
              <Icon name="bell" style={[styles.icon]} />
            </View>
            <View style={[styles.specialIconWrap]}>
              <Icon name="cog" style={[styles.specialIcon]} />
            </View>
            <View style={[styles.IconWrap]}>
              <Icon name="power" style={[styles.icon]} color="red" />
            </View>
          </View>

          <View style={[styles.main]}>
            <Text style={[styles.appName]}>Smart Home</Text>
            <Text style={[styles.pageTitle]}>Settings</Text>
            <View style={[styles.batteryCircle]}>
              <Text style={[styles.batteryPercent]}>52%</Text>
            </View>

            <Text style={[styles.description]}>
              Welcome to the team! We are thrilled to have you at our office.
            </Text>

            <View style={{flexDirection: 'row', marginLeft: 10}}>
              <View style={[styles.featuresBox, {backgroundColor: 'darkcyan'}]}>
                <Icon
                  name="lightbulb"
                  style={[styles.featuresIcon, {color: 'white'}]}
                />
                <Text style={[styles.featuresText, {color: 'white'}]}>
                  lightbulb
                </Text>
              </View>
              <View style={[styles.featuresBox]}>
                <Icon name="flare" style={[styles.featuresIcon]} />
                <Text style={[styles.featuresText]}>flare</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', marginLeft: 10}}>
              <View style={[styles.featuresBox]}>
                <Icon name="water-pump" style={[styles.featuresIcon]} />
                <Text style={[styles.featuresText]}>water-pump</Text>
              </View>
              <View style={[styles.featuresBox]}>
                <Icon name="wifi" style={[styles.featuresIcon]} />
                <Text style={[styles.featuresText]}>wifi</Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

export default Setting;
