import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle1}>Child 1</Text>
      <Text style={styles.textStyle2}>Child 2</Text>
      <Text style={styles.textStyle3}>Child 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    flexDirection: 'row',
    height: 200,
    justifyContent: 'space-around',
  },
  textStyle1: {
    borderWidth: 3,
    borderColor: 'red',
    flex: 4,
  },
  textStyle2: {
    borderWidth: 3,
    borderColor: 'red',
    flex: 2,
    ...StyleSheet.absoluteFillObject,
  },
  textStyle3: {
    borderWidth: 3,
    borderColor: 'red',
    flex: 4,
    alignSelf: 'flex-end',
  },
});

export default BoxScreen;
