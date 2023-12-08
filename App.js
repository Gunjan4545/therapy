// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from './screens/BottomNavigator';
import Testing from './screens/Testing';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={BottomNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Testing" component={Testing} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
