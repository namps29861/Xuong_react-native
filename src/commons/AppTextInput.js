import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const AppTextInput = (props) => {
    const { styles, value, onChangeText, placeholder, secureTextEntry,
        iconRight, error } = props;
    return (
        <View>
            <View style={[styles.container, styles.marginTop]}>
                <TextInput
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    placeholderTextColor='#8B8B8B'
                    secureTextEntry={secureTextEntry}
                    style={styles.textInput}
                />
                {
                    iconRight && <Image
                        source={iconRight}
                        style={{ width: 24, height: 24, justifyContent: 'flex-end', marginEnd: 10 }}
                    />
                }
            </View>
            {
                error && <Text style={styles.error}>{error}</Text>
            }

        </View>
    )
}

export default AppTextInput

const styles = StyleSheet.create({})