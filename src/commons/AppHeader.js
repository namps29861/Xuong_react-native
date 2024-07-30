import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AppHeader = (props) => {
    const { iconLeft, iconRight, title, styles, onPress } = props;
    return (
        <View style={styles.container}>
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
                title && <Text style={styles.title}>{title}</Text>
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

        </View>
    )
}

export default AppHeader

const styles = StyleSheet.create({})