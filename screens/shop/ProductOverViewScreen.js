import React from 'react';
import {View,Text,FlatList, StyleSheet} from 'react-native'
import {useSelector} from 'react-redux'

const ProductOverViewScreen = (props) => {

    const products = useSelector(state => state.products.availableProducts);

    const renderItem = ({item}) => {
        return <Text>{item.title}</Text>
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