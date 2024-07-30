import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from '../styles/AppStyles2'
import AppStatusbar from '../commons/AppStatusbar'
import AppHeader from '../commons/AppHeader'
import AppFlatViewCategory from '../commons/AppFlatViewCategory'
import ListProduct from '../commons/ListProduct'
import AppFlatViewProduct from '../commons/AppFlatViewProduct'

const ListOfProducts = (props) => {
    const {navigation} = props;

    const styleContainerHeader = () => {
        return {
            ...styles.containerHeader,
            ...styles.marginTop44,
            ...styles.containerHorizontal,
            
        }
    }

    const styleIconHeader = () => {
        return {
            ...styles.icon24,
            ...styles.marginHorizontal25
        }
    }

    const styleTextTitle = () => {
        return {
            ...styles.textSize16,
            ...styles.textColorBlack,
        }
    }

    return (
        <ScrollView style={{ ...styles.container }}>
            <View style={{ alignItems: 'center' }}>
                <AppStatusbar dark={true} />
                <AppHeader
                    iconLeft={require('../images/icon_back2.png')}
                    iconRight={require('../images/icon_cart.png')}
                    title={'CÂY TRỒNG'}
                    styles={{
                        container: styleContainerHeader(),
                        icon: styleIconHeader(),
                        title: styleTextTitle()
                    }}
                />
                <View style={{ marginStart: 20, height: 40 }}>
                    <FlatList
                        data={Category}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => <AppFlatViewCategory item={item} />}
                    />
                </View>

                <FlatList
                    data={ListProduct}
                    key={item => item.id}
                    numColumns={2}
                    renderItem={({ item }) => <AppFlatViewProduct item={item} navigation={navigation} />}
                />

            </View>
        </ScrollView>
    )
}

export default ListOfProducts

const Category = [
    { id: 1, title: 'Tất cả' },
    { id: 2, title: 'Ưa bóng' },
    { id: 3, title: 'Ưa sáng' },
    { id: 4, title: 'Ưa mát' },
    { id: 5, title: 'Sell off' },
    { id: 6, title: 'Cây lá dài' },
]