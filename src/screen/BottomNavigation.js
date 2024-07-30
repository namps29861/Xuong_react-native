import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Search from './Search';
import ListOfProducts from './ListOfProducts';
import ProductDetails from './ProductDetails';
import Cart from './Cart';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {

    const renderIcon = (
       icon:String,
       props:{
        focused: Boolean;
        color:String;
        size:Number;
       },
    ) => (
        <Image
            source={icon} tintColor={props.color}
            style={{height:24, width:24}}/>
    );


    const ICON_MENU = {
        Home: require('../images/icon_Home.png'),
        Search: require('../images/icon_search.png'),
        Notification: require('../images/shopping-cart.png'),
        Person: require('../images/icon_person.png'),
    };

  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false,}}>
            <Tab.Screen name='Home' component={Home} options={{
                tabBarIcon: props => renderIcon(ICON_MENU.Home, props),
                
            }}/>
            <Tab.Screen name='Search' component={Search} options={{
                tabBarIcon: props => renderIcon(ICON_MENU.Search, props),
                
            }}/>
            <Tab.Screen name='ListOfProducts' component={ListOfProducts} options={{
                tabBarIcon: props => renderIcon(ICON_MENU.Person, props),
                
            }}/>

    </Tab.Navigator>  )
}

export default BottomNavigation

const styles = StyleSheet.create({})