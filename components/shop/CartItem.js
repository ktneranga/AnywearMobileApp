import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, Platform} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CartItem = (props) => {
    return(
        <View style={styles.cartItem} >
            <Text style={styles.itemData}>
                <Text style={styles.quantity}>{props.qty}</Text> <Text style={styles.title} >{props.title}</Text>
            </Text>
            <View style={styles.itemData}>
                <Text style={styles.amount} >$ {props.amount}</Text>
                <TouchableOpacity onPress={props.onRemove} style={styles.deleteButton} >
                    <Ionicons name={Platform.OS === 'android' ? 'md-trash': 'ios-trash'} size={23} color='red'/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    deleteButton: {
        marginLeft: 20
    },
    cartItem: {
        padding: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    quantity: {
        fontFamily: 'open-sans-regular',
        color: '#888',
        fontSize: 16
    },
    amount: {
        fontFamily: 'open-sans-bold',
        fontSize: 16
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 16
    },
    itemData: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default CartItem;