import React from 'react';
import { View, Text, Button, StyleSheet, FlatList} from 'react-native';
import { useSelector } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';

const UserProductScreen = () => {
    const products = useSelector(state=> state.products.userProducts);

    const renderItem = (itemData)=> {
        return(
            <ProductItem
                title={itemData.item.title}
                image={itemData.item.imageUrl}
                price={itemData.item.price}
                onViewDetail={()=>{}}
                onAddToCart={()=>{}}
            />
        )
    }

    return(
        <View style={styles.screen}>
            <FlatList
                keyExtractor={item=>item.pid}
                data={products}
                renderItem={renderItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});

export default UserProductScreen;