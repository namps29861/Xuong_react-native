import { FlatList, Pressable, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart, appSlice, clearCart } from '../redux/Reducer'
import AppProductCart from '../commons/AppProductCart';
import AppInformation from '../commons/AppInformation';
import styles from '../styles/AppStyles2'
import AxiosInstance from '../helpers/AxiosInstance';

const useAppDispatcher = () => useDispatch();
const useAppSelector = useSelector;


const Cart = (props) => {
  const {navigation} =props;

  const dispatch = useAppDispatcher();
  const appState = useAppSelector((state) => state.authen);

  const [Total, setTotal] = useState(0);

  useEffect(() => {
    let tamtinh = 0;
    for(let i = 0; i < appState.cart.length; i++) {
      tamtinh += (appState.cart[i].price * appState.cart[i].quantity);
    }
    setTotal(tamtinh);
  }, [appState.cart])
  
  const pay = async () => {
    const body = {
      user: appState.user._id,
      product: appState.cart.map((item) => {
        return {
          product_id: item._id,
          quantity: item.quantity,
        }
      }),
      total: Total
    }

    const response = await AxiosInstance().post('/carts/insert', body);
    if (response.status=== true){
      ToastAndroid.show('Thanh toán thành công', ToastAndroid.BOTTOM);
      navigation.navigate('Bottom'),
      dispatch(clearCart());
    }else{
      ToastAndroid.show('Thanh toán thất bại', ToastAndroid.BOTTOM);
    }
  }

  return (
    <View style={{alignItems: 'center', justifyContent: 'center', height: '100%'}}>
      <FlatList
        data={appState.cart}
        keyExtractor={item => item._id}
        renderItem={({item}) =>
         <AppProductCart item={item}/>    }
      />

      <AppInformation
        text1={'Tạm tính'}
        text2={Total}
        styles={{
          container: {...styles.containerHorizontal2,...styles.containerHeader},

        }}
      />

      <Pressable 
        onPress={() => pay()}
        style={{width: '100%', height: 55, backgroundColor: '#98F5F9', alignItems: 'center', justifyContent: 'center', bottom: 0}}>
        <Text>Thanh toán</Text>
      </Pressable>
    </View>
  )
}

export default Cart

