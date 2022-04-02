import React,{useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const EditProductScreen = (props) => {

    const title = props.route.params.title;

    useEffect(()=>{
        props.navigation.setOptions({
            title: title
        });
    },[]);

    return(
        <View style={styles.screen}>
            <Text>Edit Product Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20
    }
});

export default EditProductScreen;