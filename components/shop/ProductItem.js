import React from 'react';
import {Text, View, Image, StyleSheet, Button} from 'react-native';
import Colors from '../../constants/Colors';

const ProductItem = (props) => {
    return (
        <View style={styles.product}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: props.image }}/>
            </View>
            <View style={styles.details}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.price}>{props.price}</Text>
            </View>
            <View style={styles.action}>
                <Button
                    color={Colors.primary}
                    title="Add to Cart"
                    onPress={props.onViewDetail}
                />
                <Button
                    color={Colors.primary}
                    title="View Details"
                    onPress={props.onAddToCart}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    product: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 300,
        margin: 20,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    details: {
        alignItems: 'center',
        height: '15%',
        padding: 10
    },
    title: {
        fontSize: 18,
    },
    price: {
        fontSize: 14,
        color: '#888'
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '25%',
        paddingHorizontal: 20
    },
    imageContainer: {
        width: '100%',
        height: '60%'
    }
});

export default ProductItem