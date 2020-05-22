import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../src/Screens/Home';
import Discover from '../src/Screens/Discover';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        inactiveTintColor: 'gray',
        activeTintColor: '#6C2FD3',
        showLabel: false,
        tabStyle: {
          backgroundColor: '#fff',
          height: 60,
          paddingBottom: 12,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name={'home'} size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name={'find'} size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name={'user'} size={28} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
