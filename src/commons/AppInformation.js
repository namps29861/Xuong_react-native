import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AppInformation = (props) => {
    const {text1, text2, styles} = props;
    return (
        <View style={styles.container}>
                <Text style={styles.text1}>{text1}</Text>
                <Text style={styles.text2}>{text2}</Text>
        </View>
    )
}

export default AppInformation

const styles = StyleSheet.create({})