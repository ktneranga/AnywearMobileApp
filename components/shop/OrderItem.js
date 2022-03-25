import React,{useState} from 'react';
import {Text, View, StyleSheet, Button,Platform} from 'react-native'
import Card from "../../components/shop/UI/Card";
import Colors from '../../constants/Colors';
import CartItem from './CartItem';

const OrderItem = (props) => {

    const [showDetails, setShowDetails] = useState(false);

    return(
        <View style={styles.orderItem}>
            <View>
                <View style={styles.summaryContainer} >
                    <View>
                        <Text style={styles.amount}>Rs. {props.amount.toFixed(2)}</Text>
                    </View>
                    <View>
                        <Text style={styles.date}>{props.date.toDateString()}</Text>
                    </View>
                    <View>
                        <Button title={showDetails ? 'Close Details' : 'Show Details'} color={Colors.primary} onPress={()=>{setShowDetails(!showDetails)}} />
                    </View>
                </View>
                {showDetails && (
                    <View>
                        {
                            props.order.map(item=>(
                                <CartItem
                                    key={item.pid}
                                    qty={item.quantity}
                                    title={item.productTitle}
                                    amount={item.sum}
                                    deletable={false}
                                />
                            ))
                        }
                    </View>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    orderItem :{
        shadowColor: 'black',
        shadowOffset: {width: 0,height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 10,
        marginHorizontal: 5,
        marginVertical: 10
    },
    summaryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    amount: {
        fontFamily: 'open-sans-bold'
    },
    date: {
        fontFamily: 'open-sans-regular',
        color: 'grey'
    },
    detailsContainer: {
        marginTop: 10,
        alignItems: 'center'
    },
    orderDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

});

export default OrderItem;
