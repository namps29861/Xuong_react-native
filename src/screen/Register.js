import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import styles from '../styles/AppStyles'
import AppStatusbar from '../commons/AppStatusbar'
import AppTextInput from '../commons/AppTextInput'
import AppButton from '../commons/AppButton'
import AppButtonLogin from '../commons/AppButtonLogin'
import { useDispatch,useSelector } from 'react-redux'
import { register } from '../redux/UserAPI'

const Register = (props) => {
    const {navigation} = props;
    const [name, setName] = useState('bo');
    const [email, setEmail] = useState('bo@gmail.com');
    const [PhoneNumber, setPhoneNumber] = useState('123456788');
    const [password, setPassword] = useState('123');
    const [ErrorMessage, setErrorMessage] = useState('');


    const useAppDispatch = () => useDispatch();
    const useAppSelector = useSelector; 
    const dispatch = useDispatch();
    const appState = useAppSelector((state)=>state.authen)
    const handleLogin = async () => {
        try {
            const body = {
                name:name,
                email: email,
                password: password,
            }
            dispatch(register(body));
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

                <Image
                    source={require('../images/background_02.png')}
                    style={[styles.backgroundImage, { position: 'relative', marginTop: -210 }]}
                />

                <Text style={[styles.text30px, { position: 'absolute', marginTop: 200 }]}>Đăng ký</Text>
                <Text style={styles.text18px}>Tạo tài khoản</Text>


                <AppTextInput
                    value={name}
                    onChangeText={value => setName(value)}
                    placeholder={'Họ tên'}
                    error={ErrorMessage}
                    styles={{
                        container: styles.containerTextInput,
                        border: styles.borderTextInput,
                        marginTop: styles.marginTop18px,
                        textInput: styles.textInput,
                        error: { ...styles.error, ...styles.text11px },
                    }}
                />

                <AppTextInput
                    value={email}
                    onChangeText={value => setEmail(value)}
                    placeholder={'Email'}
                    error={ErrorMessage}
                    styles={{
                        container: styles.containerTextInput,
                        border: styles.borderTextInput,
                        marginTop: styles.marginTop10px,
                        textInput: styles.textInput,
                        error: { ...styles.error, ...styles.text11px },
                    }}
                />

                <AppTextInput
                    value={PhoneNumber}
                    onChangeText={value => setPhoneNumber(value)}
                    placeholder={'Số điện thoại'}
                    error={ErrorMessage}
                    styles={{
                        container: styles.containerTextInput,
                        border: styles.borderTextInput,
                        marginTop: styles.marginTop10px,
                        textInput: styles.textInput,
                        error: { ...styles.error, ...styles.text11px },
                    }}
                />

                <AppTextInput
                    value={password}
                    onChangeText={value => setPassword(value)}
                    placeholder={'Mật khẩu'}
                    error={ErrorMessage}
                    styles={{
                        container: styles.containerTextInput,
                        border: styles.borderTextInput,
                        marginTop: styles.marginTop10px,
                        textInput: styles.textInput,
                        error: { ...styles.error, ...styles.text11px },
                    }}
                />

                <Text style={[styles.text11px, styles.marginTop18px, {width: 280, textAlign: 'center'}]}>
                    Để đăng ký tài khoản, bạn đăng ký 
                    <Text style={styles.text11pxGreen}> Term & Condition </Text>
                    and 
                    <Text style={styles.text11pxGreen}> Privacy Policy</Text>
                </Text>

                <AppButton  
                    title={appState.loading ? 'loading...' :'Login'}
                    onClick={handleLogin}
                    styles={{
                        container: {...styles.containerButtonLogin},
                        backgroundButton: {...styles.backgroundButton},
                        textButton: {...styles.text20White}
                    }}
                    />
                
                <AppButtonLogin
                    or={'Hoặc'}
                    iconGoogle={require('../images/icon_google.png')}
                    iconFacebook={require('../images/icon_facebook.png')}
                    text={'Tôi đã có tài khoản '}
                    textChild={'Đăng nhập'}
                    onPress={() => navigation.navigate('Login')}
                    styles={{
                        container: {...styles.containerButtonLogin},
                        containerHorizontal: {...styles.containerHorizontal},
                        line: {...styles.line},
                        iconLogin: {...styles.iconLogin, marginTop: 36,},
                        text: {...styles.text11px, marginTop: 41},
                        textChild: {...styles.text11pxGreen},
                    }}
                    />

            </View>
        </ScrollView>
    )
}

export default Register

