import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AppProductFind = (props) => {
    const {styles, image, text1, text2, text3, item} = props;
  return (
    // <View style={styles.container}>
    //   <Image
    //     source={{uri: image}}
    //     style={styles.image}
    // />

    // <View style={styles.containerChild}>
    //     <Text style={styles.text1}>{item.name} </Text>
    //     <Text style={styles.text2}>{text2}</Text>
    //     <Text style={styles.text3}>{text3}</Text>

    // </View>
    // </View>
    <View>
      <Text>{item.name} </Text>
    </View>
  )
}

export default AppProductFind

const styles = StyleSheet.create({})