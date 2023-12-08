// HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Testing"
        onPress={() => navigation.navigate('Testing')}
      />
    </View>
  );
};

export default HomeScreen;
