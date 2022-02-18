import React from 'react';
import {View,Text,FlatList, StyleSheet} from 'react-native'
import {useSelector} from 'react-redux'
import ProductItem from '../../components/shop/ProductItem';

const ProductOverViewScreen = (props) => {

    const products = useSelector(state => state.products.availableProducts);

    const renderItem = (itemData) => {
        return (
            <ProductItem
                title={itemData.item.title}
                image={itemData.item.imageUrl}
                price={itemData.item.price}
                onViewDetail={()=>{props.navigation.navigate('ProductDetailsScreen',{
                    productId: itemData.item.pid
                })}}
                onAddToCart={()=>{}}
            />
        )
    }   

    return (
        <View style={styles.screen}>
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={item=>item.pid}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});

export default ProductOverViewScreen;