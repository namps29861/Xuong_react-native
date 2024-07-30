import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AppStatusbar from '../commons/AppStatusbar'
import AppTextInput from '../commons/AppTextInput'
import AppButtonLogin from '../commons/AppButtonLogin'
import styles from '../styles/AppStyles'
import AppHeader from '../commons/AppHeader'
import AppButton from '../commons/AppButton'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/UserAPI'

const Login = (props) => {
    const {navigation} = props;
    const [email, setEmail] = useState('ba@gmail.com')
    const [password, setPassword] = useState('123');
    const [ErrorMessageUser, setErrorMessageUser] = useState('')

    const useAppDispatch = () => useDispatch();
    const useAppSelector = useSelector; 
    const dispatch = useDispatch();
    const appState = useAppSelector((state)=>state.authen)
    const handleLogin = async () => {
        try {
            const body = {
                email: email,
                password: password
            }
            dispatch(login(body));
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <AppStatusbar
                    light={true}
                />

                <ImageBackground
                    source={require('../images/background.png')}
                    style={styles.backgroundImage}>

                    <AppHeader
                        iconLeft={require('../images/icon_back.png')}
                        styles={{
                            container: { ...styles.containerHeader },
                            icon: { ...styles.icon32}
                        }}
                    />
                </ImageBackground>

                <Text style={styles.text30px}>
                    Chào mừng bạn
                </Text>

                <Text style={styles.text18px}>
                    Đăng nhập tài khoản
                </Text>

                <AppTextInput
                    value={email}
                    onChangeText={value => setEmail(value)}
                    placeholder={'Nhập email hoặc số điện thoại'}
                    error={ErrorMessageUser}
                    styles={{
                        container: styles.containerTextInput,
                        border: styles.borderTextInput,
                        marginTop: styles.marginTop18px,
                        textInput: styles.textInput,
                        error: { ...styles.error, ...styles.text11px },
                    }}
                />
                <AppTextInput
                    value={password}
                    onChangeText={value => setPassword(value)}
                    placeholder={'Mật khẩu'}
                    secureTextEntry={true}
                    iconRight={require('../images/icon_close_eye.png')}
                    error={ErrorMessageUser}
                    styles={{
                        container: styles.containerTextInput,
                        border: styles.borderTextInput,
                        marginTop: styles.marginTop10px,
                        textInput: styles.textInput,
                        error: { ...styles.error, ...styles.text11px },
                    }}
                />

                <View style={[styles.containerTextInput1, { justifyContent: 'space-between', marginTop: 13 }]}>
                    <Text style={styles.text11px}>
                        <Image
                            source={require('../images/icon_remember.png')}
                            style={{ width: 22, height: 22 }} />
                        {' '}Nhớ tài khoản
                    </Text>

                    <Text style={[styles.text11pxGreen, { marginTop: 6 }]}>
                        Quên mật khẩu?
                    </Text>
                </View>

                <AppButton
                    title={appState.loading ? 'loading...' :'Login'}
                    onClick={handleLogin}
                    styles={{
                        container: { ...styles.containerButtonLogin },
                        backgroundButton: { ...styles.backgroundButton },
                        textButton: { ...styles.text20White }
                    }}
                />

                <AppButtonLogin
                    or={'Hoặc'}
                    iconGoogle={require('../images/icon_google.png')}
                    iconFacebook={require('../images/icon_facebook.png')}
                    text={'Bạn không có tài khoản '}
                    textChild={'Tạo tài khoản'}
                    styles={{
                        container: { ...styles.containerButtonLogin },
                        containerHorizontal: { ...styles.containerHorizontal },
                        line: { ...styles.line },
                        iconLogin: { ...styles.iconLogin, marginTop: 36, },
                        text: { ...styles.text11px, marginTop: 41 },
                        textChild: { ...styles.text11pxGreen },
                    }}
                />



            </View>
        </ScrollView>
    )
}

export default Login

