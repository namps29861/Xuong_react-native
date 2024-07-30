import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AppButtonLogin = (props) => {
    const {styles, login, or, iconGoogle, iconFacebook, text, textChild, onPress} = props
  return (
    <View style={styles.container}>

      <View style={styles.containerHorizontal}>
        <View style={styles.line}></View>
        <Text style={styles.textStyle}>{or}</Text>
        <View style={styles.line}></View>
      </View>

        <View style={styles.containerHorizontal}>
            <Pressable>
                <Image
                    source={iconGoogle}
                    style={styles.iconLogin}
                    />
            </Pressable>
            <Pressable>
                <Image
                    source={iconFacebook}
                    style={styles.iconLogin}
                    />
            </Pressable>
        </View>

        <Text style={styles.text}>
            {text}
            <Text style={styles.textChild} onPress={onPress}>{textChild}</Text>
        </Text>
    </View>
  )
}

export default AppButtonLogin

const styles = StyleSheet.create({})