import { Image, StyleSheet, Text, View, Pressable, ImageBackground } from 'react-native'
import React from 'react'

const AppBanner = (props) => {''
  const { styles, text, image, iconLeft, iconRight, name, onPress } = props;
  // const{navigation} = props;
  return (
    <ImageBackground style={styles.container}
      source={image}  
    >
      {
        iconLeft &&
        <Pressable>
          <Image
            source={iconLeft}
            style={styles.icon}
          />
        </Pressable>
      }

      {
      text && <Text style={styles.text} 
      // onPress={()=> navigation.navigate(name)}

      >Xem hàng mới về

        <Image
          source={require('../images/xemthem.png')}
          style={styles.icon}
        />
      </Text>
}
      {
        iconRight &&
        <Pressable onPress={onPress}>
          <Image
            source={iconRight}
            style={styles.icon}
          />
        </Pressable>
      }

    </ImageBackground>
  )
}

export default AppBanner

