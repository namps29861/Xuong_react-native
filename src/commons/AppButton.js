import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const AppButton = (props) => {
    const {styles, title, onClick} = props;
  return (
    <View style={styles.container}>
      <Pressable style={styles.backgroundButton} onPress={onClick}>
        <Text style={styles.textButton}>{title}</Text>
      </Pressable>
    </View>
  )
}

export default AppButton

const styles = StyleSheet.create({})