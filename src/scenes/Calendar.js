import React, {Component} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../styles/CalendarStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Icon = MaterialCommunityIcons;
const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const prefixSum = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
let data = [];
let currentMonth = 0;

class Calendar extends Component {
  state = {
    index: 3,
    x: true,
    selectedId: 0,
  };
  updateData = numberOfDays => {
    let n = data.length;
    if (n <= numberOfDays) {
      for (let i = n + 1; i <= numberOfDays; i++) {
        data.push(i);
      }
      return;
    }
    let cnt = n - numberOfDays;
    while (cnt > 0) {
      data.pop();
      cnt--;
    }
  };
  incrementIndex = () => {
    let x = this.state.index;
    this.setState({index: (x + 1) % 12});
  };
  decrementIndex = () => {
    let x = this.state.index;
    this.setState({index: (x - 1 + 12) % 12});
  };

  renderItem = item => {
    // console.log(item);
    let bgColor = 'white';
    let color = '#1916A5';
    if (this.state.selectedId === item.index) {
      bgColor = '#1916A5';
      color = 'white';
    } else {
      bgColor = 'white';
      color = '#1916A5';
    }
    let daysWent = prefixSum[currentMonth] + item.index + 1;
    let y = weekDays[daysWent % 7];
    // console.log(daysWent, ' ', x);
    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({x: !x});
          this.setState({selectedId: item.index});
        }}
        style={[styles.dateWrap, {backgroundColor: bgColor}]}>
        <Text style={[styles.date, {color: color}]}>{item.item}</Text>
        <Text style={[{color: color}]}>{y}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    const {index, x, selectedId} = this.state;
    // console.log('index => ', index);
    this.updateData(days[index]);
    currentMonth = index;
    // console.log('data => ', data);

    return (
      <>
        <SafeAreaView style={[styles.container]}>
          <View style={[styles.header]}>
            <Icon name="arrow-left" style={[styles.backIcon]} />
            <Image
              source={require('../assests/images/profile.jpg')}
              style={[styles.image]}
            />
          </View>

          <View style={[styles.monthSlider]}>
            <TouchableOpacity onPress={() => this.decrementIndex()}>
              <Text style={[styles.iconWrap]}>
                <Icon name="arrow-left" style={[styles.icon]} />
                &nbsp;{month[(index - 1 + 12) % 12].substr(0, 3)}
              </Text>
            </TouchableOpacity>

            <Text style={[styles.currentMonth]}>{month[index]}</Text>

            <TouchableOpacity onPress={() => this.incrementIndex()}>
              <Text>
                {month[(index + 1) % 12].substr(0, 3)}&nbsp;
                <Icon name="arrow-right" style={[styles.icon]} />
              </Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.flatList]}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={data}
              renderItem={this.renderItem}
              extraData={selectedId}
            />
          </View>

          <Text style={[styles.ongoingText]}>Ongoing</Text>

          {x ? (
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={[styles.ongoingContainer]}>
                <View style={[styles.timeContainer]}>
                  <Text style={[styles.time]}>9 AM</Text>
                  <Text style={[styles.time]}>10 AM</Text>
                  <Text style={[styles.time]}>10 AM</Text>
                  <Text style={[styles.time]}>11 AM</Text>
                  <Text style={[styles.time]}>12 PM</Text>
                  <Text style={[styles.time]}>1 PM</Text>
                  <Text style={[styles.time]}>2 PM</Text>
                  <Text style={[styles.time]}>3 PM</Text>
                  <Text style={[styles.time]}>4 PM</Text>
                  <Text style={[styles.time]}>5 PM</Text>
                  <Text style={[styles.time]}>6 PM</Text>
                  <Text style={[styles.time]}>7 PM</Text>
                  <Text style={[styles.time]}>8 PM</Text>
                  <Text style={[styles.time]}>9 PM</Text>
                  <Text style={[styles.time]}>10 PM</Text>
                </View>
                <View style={[styles.taskContainer]}>
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
                      <Text style={[styles.Now]}>9:00 AM - 10:30 AM</Text>
                    </View>
                  </View>
                  <View style={[styles.redLineWrap]}>
                    <Icon
                      name="checkbox-blank-circle"
                      style={[styles.currentTimeIcon]}
                    />
                    <View style={[styles.currentTime]} />
                  </View>
                  <View style={[styles.taskBox, {marginTop: 8}]}>
                    <Text style={[styles.taskName]}>Software Testing</Text>
                    <Text style={[styles.taskMembers]}>Anita and David</Text>
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
                      <Text style={[styles.Now]}>11:00 AM - 12:30 PM</Text>
                    </View>
                  </View>

                  {repeatTask()}
                  {repeatTask()}
                  {repeatTask()}
                  {repeatTask()}
                </View>
              </View>
            </ScrollView>
          ) : (
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={[styles.ongoingContainer]}>
                <View style={[styles.timeContainer]}>
                  <Text style={[styles.time]}>9 AM</Text>
                  <Text style={[styles.time]}>10 AM</Text>
                  <Text style={[styles.time]}>11 AM</Text>
                  <Text style={[styles.time]}>12 PM</Text>
                  <Text style={[styles.time]}>1 PM</Text>
                  <Text style={[styles.time]}>2 PM</Text>
                  <Text style={[styles.time]}>3 PM</Text>
                  <Text style={[styles.time]}>4 PM</Text>
                  <Text style={[styles.time]}>5 PM</Text>
                  <Text style={[styles.time]}>6 PM</Text>
                  <Text style={[styles.time]}>7 PM</Text>
                  <Text style={[styles.time]}>8 PM</Text>
                  <Text style={[styles.time]}>9 PM</Text>
                  <Text style={[styles.time]}>10 PM</Text>
                </View>
                <View style={[styles.taskContainer]}>
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
                      <Text style={[styles.Now]}>9:00 AM - 10:30 AM</Text>
                    </View>
                  </View>
                  <View style={[styles.taskBox, {marginTop: 8}]}>
                    <Text style={[styles.taskName]}>Software Testing</Text>
                    <Text style={[styles.taskMembers]}>Anita and David</Text>
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
                      <Text style={[styles.Now]}>11:00 AM - 12:30 PM</Text>
                    </View>
                  </View>

                  {repeatTask()}
                  {repeatTask()}
                  {repeatTask()}
                  {repeatTask()}
                </View>
              </View>
            </ScrollView>
          )}
        </SafeAreaView>
      </>
    );
  }
}

const repeatTask = () => {
  return (
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
        <Text style={[styles.Now]}>1:00 PM - 2:00 PM</Text>
      </View>
    </View>
  );
};

export default Calendar;
