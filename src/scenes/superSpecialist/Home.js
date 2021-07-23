import React, {Component} from 'react';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView style={[styles.main]}>
        <Text>Home super specialist</Text>
        <Button
          title="ArticleListing"
          onPress={() => this.props.navigation.navigate('superArticleListing')}
        />
        <Button
          title="PatientReferral"
          onPress={() => this.props.navigation.navigate('superPatientReferral')}
        />
        <Button
          title="PublishArticles"
          onPress={() => this.props.navigation.navigate('superPublishArticles')}
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
