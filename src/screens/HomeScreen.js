import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Home Screen!</Text>
      <Button
        title='Go to Components Demo'
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        title='Go to List Demo'
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title='Go to Images'
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title='Go to Counter App'
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title='Go to Color Adder App'
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title='Go to Suare Color Feature'
        onPress={() => navigation.navigate('Square')}
      />
      <Button
        title='Go to text demo'
        onPress={() => navigation.navigate('Text')}
      />
      <Button
        title='Go to box demo'
        onPress={() => navigation.navigate('Box')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default HomeScreen;
