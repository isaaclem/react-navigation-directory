// In App.js in a new project

import React from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailScreen';
import ModalScreen from './ModalScreen';
import DrawerOneScreen from './DrawerScreens/DrawerOneScreen';
import DrawerTwoScreen from './DrawerScreens/DrawerTwoScreen';
import DrawerThreeScreen from './DrawerScreens/DrawerThreeScreen';

const MainStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
);

const DrawerStack = createDrawerNavigator(
{
  Screen1: { screen: DrawerOneScreen },
  Screen2: { screen: DrawerTwoScreen },
  Screen3: { screen: DrawerThreeScreen }
});

const DrawerNavigation = createStackNavigator({
  DrawerStack: { screen: DrawerStack },
  Main: { screen: MainStack }
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: 'green'},
    title: 'Logged In to your app!',
    headerLeft: <Text onPress={() => navigation.navigate('DrawerOpen')}>Menu</Text>
  })
})

const RootStack = createStackNavigator(
  {
    Main: MainStack,
    Drawer: DrawerNavigation,
    MyModal: ModalScreen
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);

const AppContainer = createAppContainer(DrawerNavigation);

const App = () => {
  const handle = (prevState, newState, action) => {
    console.log("TCL: handle -> prevState, newState, action", prevState, newState, action);
  };

  return <AppContainer onNavigationStateChange={handle} />;
};

export default App;
