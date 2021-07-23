import React, {Component} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  Linking,
  View,
  Image,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

export default class DocumentUpload extends Component {
  state = {
    images: [],
    location: '',
  };

  pickImage = () => {
    ImagePicker.openPicker({
      multiple: true,
    })
      .then(images => {
        this.setState({images: images});
        console.log(images);
      })
      .catch(error => {
        console.log(error.code);
        if (error.code !== 'E_PICKER_CANCELLED') Linking.openSettings();
      });
  };
  render() {
    const {images} = this.state;
    return (
      <SafeAreaView style={[styles.main]}>
        <Text>Document upload</Text>
        <Button title="Select Document" onPress={this.pickImage} />
        <View>
          {images.map((image, index) => {
            return <Image key={index} source={{uri: image.sourceURL}} />;
          })}
        </View>
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
