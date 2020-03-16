import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from './Home';

const Tab = createBottomTabNavigator();

const options = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = focused
        ? 'ios-information-circle'
        : 'ios-information-circle-outline';
    } else if (route.name === 'Settings') {
      iconName = focused ? 'ios-list-box' : 'ios-list';
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
});

export default () => (
  <Tab.Navigator
    screenOptions={options}
    tabBarOptions={{
      activeTintColor: '#a59bef',
      inactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen name="OFE" component={Home} />
  </Tab.Navigator>
)