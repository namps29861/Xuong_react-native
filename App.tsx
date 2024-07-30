import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import Login from './src/screen/Login';
import ProductDetails from './src/screen/ProductDetails';
import ListOfProducts from './src/screen/ListOfProducts';
import Home from './src/screen/Home';
import Search from './src/screen/Search';
import Register from './src/screen/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './src/redux/Store';
import BottomNavigation from './src/screen/BottomNavigation';
import { Provider } from 'react-redux';
import AppNavigation from './src/navigations/AppNavigation';

function App(): React.JSX.Element {
  const Stack  = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
        <AppNavigation />
      </SafeAreaView>
    </Provider>
  );
}


export default App