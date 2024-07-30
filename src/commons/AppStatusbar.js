import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AppStatusbar = (props) => {
    const { light, dark } = props;
    return (
        <View>
        {
            light &&
                <StatusBar
                    translucent
                    barStyle={'light-content'}
                    backgroundColor="transparent"
                />
        }
        {
            dark &&
                <StatusBar
                    translucent
                    barStyle={'dark-content'}
                    backgroundColor='transparent'
                />
        }
        </View>
    )
}

export default AppStatusbar

const styles = StyleSheet.create({})