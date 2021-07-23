import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import PublishArticles from '../scenes/superSpecialist/PublishArticles';
import ArticleListing from '../scenes/superSpecialist/ArticleListing';
import PatientReferral from '../scenes/superSpecialist/PatientReferral';
import Home from '../scenes/superSpecialist/Home';

const Tab = createBottomTabNavigator();

function MyTabBar({state, descriptors, navigation}) {
  console.log(navigation);
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={[styles.tabs]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.eachTab]}>
            <Text
              style={[styles.tabText, {color: isFocused ? '#673ab7' : '#222'}]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default class SuperSpecialistTabs extends Component {
  render() {
    return (
      <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Articles" component={ArticleListing} />
        <Tab.Screen name="Publish" component={PublishArticles} />
        <Tab.Screen name="Referral" component={PatientReferral} />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    borderTopWidth: 1,
    height: 50,
    width: '100%',
    // backgroundColor: 'orange',
  },
  eachTab: {
    // borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 16,
  },
});
