import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  ImageBackground,
} from 'react-native';
import bg from '../../assests/bg.jpg';

const UIWork = () => {
  return (
    <ImageBackground
      style={[styles.image, styles.container]}
      source={bg}
      resizeMode="cover">
      <View style={styles.test}>
        <Text style={styles.title}>WELCOME TO REACT NATIVE TRAINING</Text>
        <Text style={styles.text}>
          React Native combines the best parts of native development with React,
          a best-in-class JavaScript library for building user interfaces.
        </Text>
        <View style={styles.Button}>
          <Button
            title="Click here"
            onPress={() => Alert.alert(' button pressed')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignContent: 'center',
  },
  test: {
    marginTop: '85%',
  },
  text: {
    paddingTop: '5%',
    padding: '5%',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  Button: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
export default UIWork;
