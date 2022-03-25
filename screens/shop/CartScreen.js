import React from "react";
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import Card from "../../components/shop/UI/Card";
import { useSelector, useDispatch } from "react-redux"; 
import Colors from '../../constants/Colors';
import CartItem from "../../components/shop/CartItem";
import * as cartActions from '../../store/actions/cart';
import * as ordersAction from '../../store/actions/orders';

const CartScreen = () => {

    const dispatch = useDispatch();

    const totalAmount = useSelector(state=>state.cart.totalAmount);
    const cartItems = useSelector(state=>state.cart.items);
    const orders = useSelector(state=>state.orders.orders);

    const cartItemArray = [];

    //flatlist needs an array of data for rendering
    for(const key in cartItems){
        cartItemArray.push({
            pid: key,
            productTitle: cartItems[key].productTitle,
            productPrice: cartItems[key].productPrice,
            quantity: cartItems[key].quantity,
            sum: cartItems[key].sum
        });
    }

    // console.log(cartItemArray);

    const renderItem = (itemData) => {
        return(
            <CartItem
                qty={itemData.item.quantity}
                title={itemData.item.productTitle}
                amount={itemData.item.sum}
                deletable={true}
                onRemove={()=>{dispatch(cartActions.removeFromCart(itemData.item.pid))}}
            />
        )
    }

    return(
        <View style={styles.screen}>
            <Card>
                <View style={styles.summary}>
                    <Text style={styles.summaryText}>Total: <Text style={styles.summaryTotal}>$ {totalAmount.toFixed(2)}</Text></Text>
                    <Button title='Order Now' disabled={cartItemArray.length === 0} color={Colors.accent} onPress={()=>{dispatch(ordersAction.addOrder(cartItemArray, totalAmount))}}/>
                </View>
            </Card>
            <View style={styles.cartItems}>
                <FlatList
                    keyExtractor={(item)=>item.pid}
                    data={cartItemArray}
                    renderItem={renderItem}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20
    },
    cartItems: {
        marginTop: 10
    },
    summary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    summaryText: {
        fontFamily: 'open-sans-bold',
        fontSize: 18
    },
    summaryTotal: {
        color: Colors.primary
    }
});

export default CartScreen;