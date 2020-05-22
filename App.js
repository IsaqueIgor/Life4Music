import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  Animated,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as Animatable from 'react-native-animatable';

import Tabs from './src/router';

class App extends Component {
  constructor(props) {
    super(props);
  }

  goToTabs() {
    this.props.navigation.navigate('Tabs');
  }

  render() {
    const zoomIn = {
      0: {
        scale: 0,
      },
      0.5: {
        scale: 0.5,
      },
      1: {
        scale: 1,
      },
    };
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <Animatable.Image
          animation={zoomIn}
          source={require('./src/assets/Splashlogo.png')}
          style={styles.logo}
        />
        <TouchableOpacity style={styles.btn} onPress={() => this.goToTabs()}>
          <Text style={styles.text}>Start Listening</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const Stack = createStackNavigator();

function Stacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="App"
        component={App}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Player"
        component={App}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Details"
        component={App}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function MainScreen() {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: '#000',
    fontWeight: 'bold',
  },
  logo: {
    height: 220,
    width: '80%',
    marginBottom: 40,
    marginTop: 20,
  },
  btn: {
    width: '60%',
    height: 50,
    borderRadius: 20,
    backgroundColor: '#6C2FD3',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    elevation: 15,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});
