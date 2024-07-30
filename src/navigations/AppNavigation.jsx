import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import UserNavigation from './UserNavigation';
import MainNavigation from './MainNavigation';

import { useSelector } from 'react-redux'

const useAppSelector = useSelector;

const AppNavigation = () => {
    const appState = useAppSelector((state) => state.authen);
    console.log(appState)
    return (
        <NavigationContainer>
            {
                appState.user ? <MainNavigation /> :
                    <UserNavigation />
            }
        </NavigationContainer>
    )
}

export default AppNavigation