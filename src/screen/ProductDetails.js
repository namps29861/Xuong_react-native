import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import styles from '../styles/AppStyles2'
import AppStatusbar from '../commons/AppStatusbar'
import AppHeader from '../commons/AppHeader'
import AppBanner from '../commons/AppBanner'
import AppInformation from '../commons/AppInformation'
import AppButton from '../commons/AppButton'
import { useDispatch, useSelector} from 'react-redux'
import { addItemToCart } from '../redux/Reducer'

const useAppDispatcher = () => useDispatch();
const useAppSelector = useSelector;

const ProductDetails = (props) => {
  const {route} = props;
  const {params} = route;

  const dispatch = useAppDispatcher();
  const appState = useAppSelector((state) => state.authen);

  const [Quantity, setQuantity] = useState(1)

  const handleAddToCart = (item) => {
    const data = {...item, ...{quantity: Quantity}};
    dispatch(addItemToCart(data));
  }
console.log('cart: ', appState.cart)

  return (
    <ScrollView style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <AppStatusbar dark={true} />

        <AppHeader
          iconLeft={require('../images/icon_back2.png')}
          title={'Cây trồng'}
          iconRight={require('../images/icon_cart.png')}
          styles={{
            container: styleHeader(),
            icon: stylesIconHeader(),
            title: styleTextNameProduct(),
          }}
        />

        <AppBanner
          iconLeft={require('../images/icon_back2.png')}
          image={{ uri: params.item.images[0] }}
          iconRight={require('../images/icon_back3.png')}
          styles={{
            container: styleSlideProduct(),
            icon: styles.icon24,
            imageStyle: {},
          }}
        />

        <View style={{ alignItems: 'center' }}>
          <AppInformation
            text1={params.item.name}
            text2={params.item.name}
            styles={{
              container: styleCategory(),
              text1: styleTextCategory(),
              text2: styleTextCategory()
            }}
          />

          <AppInformation
            text1={params.item.price}
            styles={{
              container: styleCategory(),
              text1: styleTextPrice()
            }}
          />

          <AppInformation
            text1={'Chi tiết Sản Phẩm'}
            styles={{
              container: styleContainerInformation(),
              text1: styleTextInformation(),
            }}
          />

          <AppInformation
            text1={params.item.name}
            text2={'Nhỏ'}
            styles={{
              container: styleContainerInformation(),
              text1: styleTextInformation2(),
              text2: styleTextInformation2(),
            }}
          />

          <AppInformation
            text1={'Xuất xứ'}
            text2={'Châu Phi'}
            styles={{
              container: styleContainerInformation(),
              text1: styleTextInformation2(),
              text2: styleTextInformation2(),
            }}
          />

          <AppInformation
            text1={'Tình trạng'}
            text2={'Còn 156 sp'}
            styles={{
              container: styleContainerInformation(),
              text1: styleTextInformation2(),
              text2: styleTextInformation3(),
            }}
          />
        </View>

        <AppInformation
          text1={'Đã chọn 1 sản phẩm'}
          text2={'Tạm tính'}
          styles={{
            container: styleContainerInformation3(),
            text1: styleTextInformation2(),
            text2: styleTextInformation2(),
          }}
        />

          <View style={styleQuantity()}>
            <AppHeader
              iconLeft={require('../images/icon_minus.png')}
              title={Quantity}
              iconRight={require('../images/icon_plus.png')}
              styles={{
                container: {...styles.containerHorizontal2,...styles.container6},
                icon: styles.icon30,
                title: styleTextInformation()
              }}
            />
            <Text style={styleTextPrice2()}>{params.item.Quantity}</Text>
          </View>

          <AppButton
            title={'CHỌN MUA'}
            onClick={() => handleAddToCart(params.item)}
            styles={{
              container: {...styles.marginTop15},
              backgroundButton: styleButton(),
              textButton: styleTextButton(),
            }}
          />
      </View>
    </ScrollView>
  )
}

export default ProductDetails

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

const styleTextNameProduct = () => {
  return {
    ...styles.textSize16,
    ...styles.textColorBlack
  }
}

const styleSlideProduct = () => {
  return {
    ...styles.imageProduct2,
    ...styles.containerHorizontal2,
    ...styles.marginTop10,
  }
}

const styleCategory = () => {
  return {
    ...styles.containerHorizontal2,
    ...styles.alignSeft,
    ...styles.marginTop10,
  }
}

const styleTextCategory = () => {
  return {
    ...styles.backroundColorGreen,
    ...styles.padding5,
    ...styles.borderRadius8,
    ...styles.textColorWhite,
    ...styles.margiRight8,
  }
}

const styleTextPrice = () => {
  return {
    ...styles.textSize24,
    ...styles.textColorGreen,
  }
}

const styleTextPrice2 = () => {
  return {
    ...styles.textSize24,
    ...styles.textColorBlack,
  }
}


const styleContainerInformation = () => {
  return {
    ...styles.containerHorizontal2,
    ...styles.alignSeft,
    ...styles.marginTop10,
    ...styles.borderWidthBottom,
    ...styles.container3,
  }
}

const styleContainerInformation2 = () => {
  return {
    ...styles.containerHorizontal2,
    ...styles.marginTop30,
    ...styles.borderWidthBottom,
    ...styles.container4,
  }
}
const styleContainerInformation3 = () => {
  return {
    ...styles.containerHorizontal2,
    ...styles.marginTop30,
    ...styles.container4,
  }
}


const styleTextInformation = () => {
  return {
    ...styles.textSize16,
    ...styles.textColorBlack,
  }
}
const styleTextInformation2 = () => {
  return {
    ...styles.textSize14,
    ...styles.textColorBlack,
  }
}

const styleQuantity = () => {
  return {
    ...styles.containerHorizontal2,
    ...styles.marginTop10,
    ...styles.container4
  }
}

const styleTextInformation3 = () => {
  return {
    ...styles.textSize14,
    ...styles.textColorGreen,
  }
}
const styleTextButton = () => {
  return {
    ...styles.textSize16,
    ...styles.textColorWhite,
  }
}

const styleButton = () => {
  return{
    ...styles.backroundColorGreen,
    ...styles.containerHorizontal3,
    ...styles.container4,
    ...styles.container5,
    ...styles.borderRadius8,
  }
}
