import React from 'react';
import {View,Text,FlatList, StyleSheet} from 'react-native'
import {useSelector} from 'react-redux'

const ProductOverViewScreen = (props) => {

    const products = useSelector(state => state.products.userProducts);

    return (
        <View style={styles.screen}>

        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default ProductOverViewScreen;