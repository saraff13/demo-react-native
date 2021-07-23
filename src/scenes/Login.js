import React, {Component} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {initLogin} from '../store/actions/loginAction';

class Login extends Component {
  state = {
    user: '',
    password: '123456789',
  };
  checkInput = () => {
    const {user} = this.state;
    if (
      user !== 'patient' &&
      user !== 'specialist' &&
      user !== 'superspecialist'
    ) {
      alert('please enter your correct type');
      return;
    }
    this.props.initLogin(user);
  };
  render() {
    const {user, password} = this.state;
    return (
      <SafeAreaView style={[styles.container]}>
        <Text>{`Enter patient or specialist or superspecialist in type below`}</Text>

        <TextInput
          placeholder="Enter Your type"
          value={user}
          onChangeText={value => this.setState({user: value})}
        />
        <TextInput
          placeholder="Enter password"
          value={password}
          secureTextEntry
          onChangeText={value => this.setState({password: value})}
        />
        <Button title="login" onPress={() => this.checkInput()} />
      </SafeAreaView>
    );
  }
}

export default connect(null, {initLogin})(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
