import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../scenes/Login';
import {connect} from 'react-redux';

import AppointmentStatus from '../scenes/patient/AppointmentStatus';
import AppointmentBooking from '../scenes/patient/AppointmentBooking';
import DocumentUpload from '../scenes/patient/DocumentUpload';
import Payment from '../scenes/patient/Payment';
import SpecialistDetail from '../scenes/patient/SpecialistDetail';
import SpecialistListing from '../scenes/patient/SpecialistListing';
import PatientDrawer from './PatientDrawer';

import Appointment from '../scenes/specialist/Appointment';
import ArticleListing from '../scenes/specialist/ArticleListing';
import ArticleDetail from '../scenes/specialist/ArticleDetail';
import PatientDetail from '../scenes/specialist/PatientDetail';
import PatientListing from '../scenes/specialist/PatientListing';
import PatientReferral from '../scenes/specialist/PatientReferral';
import SpecialistDrawer from './SpecialistDrawer';

import superArticleListing from '../scenes/superSpecialist/ArticleListing';
import superPatientReferral from '../scenes/superSpecialist/PatientReferral';
import PublishArticles from '../scenes/superSpecialist/PublishArticles';
import SuperSpecialistDrawer from './SuperSpecialistDrawer';

const Stack = createStackNavigator();

class Auth extends Component {
  render() {
    const {user} = this.props;
    return (
      <NavigationContainer>
        {user === 'patient' ? (
          <Stack.Navigator>
            <Stack.Screen
              name="PatientDrawer"
              component={PatientDrawer}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="AppointmentStatus"
              component={AppointmentStatus}
            />
            <Stack.Screen
              name="AppointmentBooking"
              component={AppointmentBooking}
            />
            <Stack.Screen name="Payment" component={Payment} />
            <Stack.Screen name="DocumentUpload" component={DocumentUpload} />
            <Stack.Screen
              name="SpecialistDetail"
              component={SpecialistDetail}
            />
            <Stack.Screen
              name="SpecialistListing"
              component={SpecialistListing}
            />
          </Stack.Navigator>
        ) : user === 'specialist' ? (
          <Stack.Navigator>
            <Stack.Screen
              name="SpecialistDrawer"
              component={SpecialistDrawer}
            />
            <Stack.Screen name="Appointment" component={Appointment} />
            <Stack.Screen name="ArticleListing" component={ArticleListing} />
            <Stack.Screen name="ArticleDetail" component={ArticleDetail} />
            <Stack.Screen name="PatientListing" component={PatientListing} />
            <Stack.Screen name="PatientDetail" component={PatientDetail} />
            <Stack.Screen name="PatientReferral" component={PatientReferral} />
          </Stack.Navigator>
        ) : user === 'superspecialist' ? (
          <Stack.Navigator>
            <Stack.Screen
              name="SuperSpecialistDrawer"
              component={SuperSpecialistDrawer}
            />
            <Stack.Screen
              name="superArticleListing"
              component={superArticleListing}
            />
            <Stack.Screen
              name="superPatientReferral"
              component={superPatientReferral}
            />
            <Stack.Screen
              name="superPublishArticles"
              component={PublishArticles}
            />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    );
  }
}

const mapStateToProps = state => ({
  user: state.loginReducer.user,
});

export default connect(mapStateToProps)(Auth);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
