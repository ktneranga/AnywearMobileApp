import React,{useEffect} from 'react';
import {Text, View, StyleSheet, Button, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';

const ProductDetailsScreen = (props) => {

    const productId = props.route.params.productId;
    const product = useSelector(state=>state.products.availableProducts.find(product=>product.pid === productId));

    console.log(product);

    useEffect(()=>{
        props.navigation.setOptions({
            title: product.title
        });
    });

    return (
        <ScrollView style={styles.container}>
            <View style={styles.product}>
                <Text>ProductDetailsScreen</Text>
                <Text>{product.title}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default ProductDetailsScreen;