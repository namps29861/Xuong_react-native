import { StyleSheet, Text, View } from 'react-native'
export default styles = StyleSheet.create({



    //
    container: {
        width: '100%',
        height: '100%',
    },
    backgroundImage: {
        width: '100%',
        height: 487.09,
        marginTop: -175,
    },

    //header
    containerHeader: {
        width: '100%',
        height: 55,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 215,
        paddingHorizontal: 20,
    },
    icon32: {
        width: 32, height: 32,
    },
    icon24: {
        width: 24, height: 24,
    },

    //textInput 
    containerTextInput: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 300,
        borderWidth:1,
        borderRadius:10,
        borderColor:'#8B8B8B'

    },
    containerTextInput1: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 300,
        borderRadius:10,
        borderColor:'#8B8B8B'

    },
    borderTextInput: {
        width: 300,
        height: 46,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#8B8B8B', 
       
    },
    textInput: {
        fontFamily: 'Poppins-Medium',
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 22.5,
        marginHorizontal: 5, 
        flex: 1,
    },
    error: {
        color: '#CE0000',
        marginStart: 30,
        justifyContent: 'flex-start',
    },
    marginTop18px: {
        marginTop: 18,
    },
    marginTop10px: {
        marginTop: 10,
    },
    marginTop26: {
        marginTop: 26,
    },


    //Text
    text30px: {
        fontFamily: 'Poppins-Medium',
        fontWeight: '700',
        fontSize: 30,
        lineHeight: 45,
        color: 'black',
    },
    text18px: {
        fontFamily: 'Poppins-Medium',
        fontWeight: '400',
        fontSize: 18,
        lineHeight: 27,
        color: 'black',
    },
    text11px: {
        fontFamily: 'Poppins-Medium',
        fontWeight: '600',
        fontSize: 11,
        lineHeight: 16.5,

    },
    text11pxGreen: {
        color: '#009245',
        fontFamily: 'Poppins-Medium',
        fontWeight: '600',
        fontSize: 11,
        lineHeight: 16.5,
    },
    text20White: {
        fontFamily: 'Poppins-Medium',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 30,
        color: 'white',
    },
    text24:{
        
    },



// button login
    containerButtonLogin: {
        alignItems: 'center',
        marginTop: 26,
        width: 300,
    },
    backgroundButton: {
        width: 300,
        height: 50,
        borderRadius: 15,
        backgroundColor: '#007537',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerHorizontal: {
        width: 300,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    line: {
        width: 120,
        borderWidth: 1,
        borderColor: '#4caf50',
        marginHorizontal: 7,
    },
    iconLogin: {
        width: 32, 
        height: 32,
        marginHorizontal: 10,
    }

})