import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '../styles/AppStyles2'
import AppStatusbar from '../commons/AppStatusbar'
import AppHeader from '../commons/AppHeader'
import AppTextInput from '../commons/AppTextInput'
import AppProductFind from '../commons/AppProductFind'
import { useDispatch, useSelector} from 'react-redux'
import AxiosInstance from '../helpers/AxiosInstance'
import { isFulfilled } from '@reduxjs/toolkit'

const useAppDispatcher = () => useDispatch();
const useAppSelector = useSelector;


const Search = () => {

    const dispatch = useAppDispatcher();
    const appState = useAppSelector((state) => state.authen);  

    const [Search, setSearch] = useState('');
    const [Data, setData] = useState([])

    useEffect(() => {
        const fetch = async () => {
      try {
        const response = await AxiosInstance().get(`/products/getProductName?keywords=${Search}`);
        console.log('res: ', response.data);
        if (response.status){
            setData(response.data);
        }
      } catch (error) {
        
      }
        }
        fetch();
    }, [Search])
    console.log(Search)
    console.log(Data)

    return (
        <ScrollView style={{ ...styles.container }}>
            <View style={{ alignItems: 'center' }}>
                <AppStatusbar dark={true} />

                <AppHeader
                iconLeft={require('../images/icon_back2.png')}
                title={'Tìm kiếm'}
                iconRight={require('../images/icon_null.png')}
                styles={{
                    container: styleHeader(),
                    icon: stylesIconHeader(),
                    title: {...styles.textSize16, ...styles.textColorBlack}
                }}
            />

            <AppTextInput
                value={Search}
                onChangeText={value => setSearch(value)}
                placeholder={'Tìm kiếm'}
                iconRight={require('../images/icon_search.png')}
                styles={{
                    container: styleInput(),
                    icon: styles.icon24,
                    textInput: styleTextInput(),
                }}
            />

            <FlatList
                data={Data}
                keyExtractor={item => item._id}
                renderItem={({item}) => <AppProductFind item={item}/>}
            />

            </View>
        </ScrollView>
    )
}

export default Search



const styleHeader = () => {
    return {
        ...styles.containerHeader,
        ...styles.containerHorizontal,
        ...styles.marginTop44,
    }
}

const stylesIconHeader = () => {
    return {
        ...styles.icon24,
        ...styles.marginHorizontal25,
    }
}

const styleInput = () => {
    return{
        ...styles.container4,
        ...styles.containerHeight40,
        ...styles.containerHorizontal2,
        ...styles.borderWidthBottom,

    }
}

const styleTextInput = () => {
    return {
        ...styles.textSize16,
        ...styles.textColorBlack,
    }
}

const styleContainerProduct = () => {
    return{
        ...styles.container4,
        ...styles.containerheight77,
        ...styles.containerHorizontal4,
        ...styles.marginTop50,
    }
}

const styleImageProduct = () => {
    return {
        ...styles.imagePruduct3,
        ...styles.borderRadius8,
    }
}

const styletextProduct = () => {
    return {
        ...styles.textSize16,
        ...styles.textColorBlack
    }
}

const styletextProduct2 = () => {
    return {
        ...styles.textSize14,
        ...styles.textColorBlack
    }
}

