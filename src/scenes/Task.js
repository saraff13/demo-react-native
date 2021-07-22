import React, {Component} from 'react';
import {Image, SafeAreaView, Settings, Text, View} from 'react-native';
import styles from '../styles/TaskStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Icon = MaterialCommunityIcons;

class Task extends Component {
  render() {
    return (
      <>
        <SafeAreaView style={[styles.container]}>
          <View style={[styles.header]}>
            <Icon name="reorder-vertical" style={[styles.dashboardIcon]} />
            <Image
              source={require('../assests/images/profile.jpg')}
              style={[styles.image]}
            />
          </View>

          <View style={[styles.nameBox]}>
            <Text style={[styles.name]}>Hi Ghulam</Text>
            <Text style={[styles.pendingTasks]}>6 Tasks are pending</Text>
          </View>

          <View style={[styles.taskBox]}>
            <Text style={[styles.taskName]}>Mobile App Design</Text>
            <Text style={[styles.taskMembers]}>Mike and Anita</Text>
            <View style={[styles.taskBottom]}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../assests/images/profile.jpg')}
                  style={[styles.taskMembersImage]}
                />
                <Image
                  source={require('../assests/images/profile.jpg')}
                  style={[
                    styles.taskMembersImage,
                    {position: 'absolute', marginLeft: 17},
                  ]}
                />
              </View>
              <Text style={[styles.Now]}>Now</Text>
            </View>
          </View>

          <View style={[styles.monthlyReview]}>
            <Text style={[styles.monthlyReviewText]}>Monthly Review</Text>
            <Icon name="calendar-range-outline" style={[styles.calendarIcon]} />
          </View>

          <View style={[styles.detailBox]}>
            <View style={[styles.leftDetailBox]}>
              <View style={[styles.largeDetailBox]}>
                <Text style={[styles.numberOfTasks]}>22</Text>
                <Text style={[styles.statusOfTasks]}>Done</Text>
              </View>
              <View style={[styles.smallDetailBox]}>
                <Text style={[styles.numberOfTasks]}>10</Text>
                <Text style={[styles.statusOfTasks]}>Ongoing</Text>
              </View>
            </View>

            <View style={[styles.rightDetailBox]}>
              <View style={[styles.smallDetailBox]}>
                <Text style={[styles.numberOfTasks]}>7</Text>
                <Text style={[styles.statusOfTasks]}>In progress</Text>
              </View>
              <View style={[styles.largeDetailBox]}>
                <Text style={[styles.numberOfTasks]}>12</Text>
                <Text style={[styles.statusOfTasks]}>Waiting for Review</Text>
              </View>
            </View>
          </View>

          <View style={[styles.tabIcons]}>
            <Icon name="home-variant-outline" style={[styles.eachTabIcon]} />
            <Icon name="file" style={[styles.eachTabIcon]} />
            <Icon name="account" style={[styles.eachTabIcon]} />
            <Icon name="bell" style={[styles.eachTabIcon]} />
          </View>
        </SafeAreaView>
      </>
    );
  }
}

export default Task;
