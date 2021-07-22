import React, {Component} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import styles from '../styles/ExerciseStyle';
import MapboxGL from '@react-native-mapbox-gl/maps';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Icon = MaterialCommunityIcons;

MapboxGL.setAccessToken(
  'pk.eyJ1Ijoic3VtaXQtc2FyYWZmIiwiYSI6ImNrcmE2NXExazFlZ24yeGxwZ3M4N3Q1ZHYifQ.X-8rHUmCfXG7fHr9wpRN0g',
);

class Exercise extends Component {
  render() {
    return (
      <SafeAreaView style={[styles.main]}>
        <View style={[styles.mapContainer]}>
          <MapboxGL.MapView style={styles.map}>
            <MapboxGL.UserLocation
              visible={true}
              onUpdate={this.onUserLocationUpdate}
            />
            <MapboxGL.Camera
              // zoomLevel={16}
              followUserMode={'normal'}
              followUserLocation
            />
          </MapboxGL.MapView>
          <Text style={[styles.GPS]}>
            GPS <Icon name="network-strength-4" style={[styles.GPSIcon]} />
          </Text>
          <Icon name="arrow-collapse" style={[styles.zoomIcon]} />
        </View>

        <View style={[styles.headerContainer]}>
          <View style={[styles.header]}>
            <Image
              source={require('../assests/images/profile.jpg')}
              style={[styles.headerImage]}
            />
            <View style={[styles.headerTitle]}>
              <Text style={[styles.wishingText]}>Good Morning</Text>
              <Text style={[styles.userName]}>Ariuka</Text>
            </View>
            <Icon name="dots-vertical" style={[styles.headerIcon]} />
          </View>

          <View style={styles.detailBox}>
            <View style={[styles.detailLeft]}>
              <Icon name="walk" style={[styles.walkIcon]} />
              <Text style={[styles.numberOfSteps]}>7470</Text>
              <Text style={[styles.steps]}>steps</Text>
            </View>

            <View style={{flexDirection: 'column', marginVertical: 15}}>
              <View style={{borderWidth: 1.5, borderColor: 'black', flex: 1}} />
              <View
                style={{borderWidth: 1, borderColor: 'lightgrey', flex: 2}}
              />
            </View>

            <View style={[styles.detailRight]}>
              <View style={[styles.durationBox]}>
                <Text style={[styles.durationText]}>Duration</Text>
                <Text style={[styles.durationTimer]}>0:37:21</Text>
              </View>
              <View style={[styles.energyBox]}>
                <Text style={[styles.energyText]}>Energy</Text>
                <View style={[styles.energySpent]}>
                  <Text style={[styles.energySpentNumber]}>75.5</Text>
                  <Text style={[styles.energySpentUnit]}>kcal</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.pauseIconwrap]}>
            <Icon name="pause" style={[styles.pauseIcon]} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Exercise;
