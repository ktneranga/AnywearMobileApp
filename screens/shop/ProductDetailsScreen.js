import React,{useEffect} from 'react';
import {Text, View, StyleSheet, Button, ScrollView, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Colors from '../../constants/Colors';
import * as cartActions from '../../store/actions/cart';

const ProductDetailsScreen = (props) => {

    const dispatch = useDispatch();

    const productId = props.route.params.productId;
    const product = useSelector(state=>state.products.availableProducts.find(product=>product.pid === productId));

    useEffect(()=>{
        props.navigation.setOptions({
            title: product.title
        });
    });

    return (
        <ScrollView style={styles.product}>
            <Image style={styles.image} source={{ uri: product.imageUrl }}/>
            <View style={styles.action}>
                <Button
                    title='Add to Cart'
                    onPress={()=>{dispatch(cartActions.addToCart(product))}}
                    color={Colors.primary}
                />
            </View>
            <Text style={styles.price}>$ {product.price.toFixed(2)}</Text>
            <Text style={styles.description} >{product.description}</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    product: {
        flex: 1
    },
    image: {
        height: 300,
        width: '100%'
    },
    price: {
        fontSize: 20,
        color: '#888',
        textAlign: 'center',
        marginVertical: 20,
        fontFamily: 'open-sans-regular'
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        padding: 20,
        fontFamily: 'open-sans-regular'
    },
    action: {
        alignItems: 'center',
        marginVertical: 10
    }
})

export default ProductDetailsScreen;