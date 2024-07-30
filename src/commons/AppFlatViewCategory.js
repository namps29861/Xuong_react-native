import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import styles from '../styles/AppStyles2';

const AppFlatViewCategory = (props) => {
    const {item} = props;
    
  return (
    <View style={{}}>
      <Text style={styleItemCategory()}>{item.title}</Text>
    </View>
  )
}

export default AppFlatViewCategory

const styleItemCategory = () => {
    return {
        ...styles.borderRadius4,
        ...styles.padding4_8,
        ...styles.marginHorizontal3,
        ...styles.textSize14,
        ...styles.textColorGray
    }
}



// const styles = StyleSheet.create({
//     title: {
//         borderRadius: 4,
//         marginRight: 5,
//         paddingVertical: 4,
//         paddingHorizontal: 8,
//         backgroundColor: '#009245',
//         color: 'white',
//     }
// })

