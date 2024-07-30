import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from '../styles/AppStyles2';
import { useNavigation } from '@react-navigation/native';

const AppFlatViewProduct = (props) => {
  const navigation = useNavigation();
  const {item} = props;
  return (
    <Pressable style={styleContainer()}  onPress={() => navigation.navigate('ProductDetails', {item:item})}>
      <Image
        
        source={{uri: item.images[0]}}
        style={styleImage()}/>
        
        <Text style={styles.textSize16}>{item.name}</Text>
        <Text style={styles.textSize14}>{item.category.category_name}</Text>
        <Text style={styles.textPrice}>{item.price} đ</Text>
    </Pressable>
  )
}

export default AppFlatViewProduct

const styleContainer = () => {
  return {
    ...styles.containerProduct,
    ...styles.borderRadius8,
    ...styles.colums,
    ...styles.marginHorizontal15,
  }
}

const styleImage = () => {
  return{
    ...styles.imageProduct,
    ...styles.borderRadius8,
  }
}

