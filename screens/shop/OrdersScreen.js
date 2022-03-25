import React,{useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { useSelector } from 'react-redux';
import OrderItem from '../../components/shop/OrderItem';
import Card from '../../components/shop/UI/Card';

const OrderScreen = (props) => {

    const orders = useSelector(state=>state.orders.orders);

    const renderItem = (itemData) => {
        return(
            <OrderItem
                amount = {itemData.item.totalAmount}
                date = {itemData.item.date}
                order ={itemData.item.items}
            />
        );
    }

    return(
        <View style={styles.screen}>
            <FlatList
                keyExtractor={item=>item.id}
                data={orders}
                renderItem={renderItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 15
    }
});

export default OrderScreen;