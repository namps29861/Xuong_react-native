import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screen/Home';
import Search from '../screen/Search';

import Details from '../screen/ProductDetails';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Details" component={Details} />
        </Tab.Navigator>
    )
}


import { original } from '@reduxjs/toolkit';
import BottomNavigation from '../screen/BottomNavigation';
import Cart from '../screen/Cart';
import ProductDetails from '../screen/ProductDetails';


const MainNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Bottom' component={BottomNavigation}/>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name='Cart' component={Cart}/>
            <Stack.Screen name="ProductDetails" component={ProductDetails}/>

        </Stack.Navigator>
    )
}

export default MainNavigation