import React from 'react';
import { View, Text, Button, StyleSheet, FlatList} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import * as ProductAction from '../../store/actions/products';

const UserProductScreen = (props) => {
    const products = useSelector(state=> state.products.userProducts);

    const dispatch = useDispatch();

    const renderItem = (itemData)=> {
        return(
            <ProductItem
                title={itemData.item.title}
                image={itemData.item.imageUrl}
                price={itemData.item.price}
                onViewDetail={()=>{}}
                onAddToCart={()=>{}}
            >
                <Button
                    color={Colors.primary}
                    title="Edit"
                    onPress={()=>{props.navigation.navigate('EditProductScreen', {
                        title: itemData.item.title
                    } )}}
                />
                <Button
                    color={Colors.primary}
                    title="Delete"
                    onPress={()=>{dispatch(ProductAction.deleteProduct(itemData.item.pid))}}
                />
            </ProductItem>
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