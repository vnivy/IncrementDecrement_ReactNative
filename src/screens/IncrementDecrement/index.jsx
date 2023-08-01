// CounterComponent.js
import React from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {increment, decrement} from './actions';

const CounterComponent = ({count, increment, decrement}) => {
  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={increment} />
      <Button title="Decrement" onPress={decrement} />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
