import React, {Component} from 'react';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';

export default class ArticleListing extends Component {
  render() {
    return (
      <SafeAreaView style={[styles.main]}>
        <Text>ArticleListing</Text>
        <Button
          title="Article Detail"
          onPress={() => this.props.navigation.navigate('ArticleDetail')}
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
