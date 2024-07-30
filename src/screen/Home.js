import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import styles from '../styles/AppStyles2';
import AppHeader from '../commons/AppHeader';
import AppStatusbar from '../commons/AppStatusbar';
import AppBanner from '../commons/AppBanner';
import AppFlatViewProduct from '../commons/AppFlatViewProduct';
import ListProduct from '../commons/ListProduct';
import {useSelector, useDispatch, useAppDispatch} from 'react-redux';
import {getProduct,} from '../redux/ProductAPI';



const Home = (props) => {
  const {navigation} = props;
  const useAppDispatcher = () => useDispatch();
  const useAppSelector =  useSelector;
  const dispatch = useAppDispatcher();
  const appState = useAppSelector((state) => state.authen);

  useEffect(() => {
    const page = 1;
    const limit = 20;
    dispatch(getProduct(page, limit));
    
  }, []);
  // console.log('....products: ',appState.products)
  return (
    <ScrollView style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <AppStatusbar dark={true} />
        <AppHeader
          onPress={() => navigation.navigate('Cart')}
          title={'Planta - làm đẹp không gian nhà bạn'}
          iconRight={require('../images/icon_cart.png')}
          styles={{
            container: styleHeader(),
            title: styleTitle(),
            icon: styleIconCart(),
          }}
        />

        <AppBanner
          image={require('../images/banner1.png')}
          text={true}
          name={'Lisofproduct'}
          navigation={navigation}
          styles={{
            container: {...styles.containerBanner},
            imageStye: styleImageBanner(),
            text: styleTextBanner(),
            icon: styles.icon24,
          }}
        />

        <Text style={styleTitleProduct()}>Cây Trồng</Text>

        <FlatList
          data={appState.products[0]}
          key={item => item._id}
          numColumns={2}
          renderItem={({item}) => 
          <AppFlatViewProduct item={item} />}
        />
      </View>
    </ScrollView>
  );
};

export default Home;

const styleHeader = () => {
  return {
    ...styles.containerHorizontal,
    ...styles.marginTop30,
  };
};

const styleTitle = () => {
  return {
    ...styles.textSize24,
    ...styles.container_2,
    ...styles.margiLeft25,
    ...styles.textColorBlack,
  };
};

const styleIconCart = () => {
  return {
    ...styles.icon24,
    ...styles.margiRight25,
  };
};

const styleImageBanner = () => {
  return {
    ...styles.containerBanner,
    ...styles.positionRelative,
  };
};

const styleTextBanner = () => {
  return {
    ...styles.positionAbsolute,
    ...styles.textSize16,
    ...styles.margiLeft25,
    ...styles.textColorGreen,
    ...styles.marginTop10,
  };
};

const styleTitleProduct = () => {
  return {
    ...styles.textSize24,
    ...styles.alignSeft,
    ...styles.margiLeft25,
    ...styles.textColorBlack,
    ...styles.marginTop30,
  };
};
