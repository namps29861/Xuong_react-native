import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import Login from '../screen/Login';
import Register from '../screen/Register';
import Home from '../screen/Home';
import Cart from '../screen/Cart';

const UserNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Register' component={Register}/>
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}

export default UserNavigation