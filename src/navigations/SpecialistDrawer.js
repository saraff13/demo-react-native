import React, {Component} from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {View, Text, Image, StyleSheet} from 'react-native';
import About from '../scenes/About';
import Help from '../scenes/Help';
import SpecialistTabs from './SpecialistTabs';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={[styles.profileBox]}>
        <Image
          source={require('../assests/images/profile.jpg')}
          style={[styles.image]}
        />
        <Text style={[styles.name]}>Sumit Saraff</Text>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default class SpecialistDrawer extends Component {
  render() {
    return (
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={SpecialistTabs} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Help" component={Help} />
      </Drawer.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileBox: {
    alignItems: 'center',
    marginVertical: 15,
  },
  image: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 25,
  },
});
