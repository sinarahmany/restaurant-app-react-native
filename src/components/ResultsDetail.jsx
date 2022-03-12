import react, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { borderLeftColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { Ionicons  } from '@expo/vector-icons'; 

const ResultsDetail = ({ result }) => {
    let distance = (result.distance / 1000).toFixed(1) ;
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: result.image_url }} />
            <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">{result.name}</Text>
            <Text style={styles.rate}>
                {result.rating} Stars, {result.review_count}
            </Text>
            <Text style={styles.address}>
                <Ionicons  style={styles.iconStyle} name="ios-location-sharp" size={20} /> {distance} Km Away
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        shadowColor: "#171717",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 5,
        backgroundColor: "white",
        padding: 12,
        borderRadius: 13,
        marginVertical: 2,
    },
    image: {
        width: 170,
        height: 120,
        borderRadius: 7,
        marginBottom: 5,
    },
    name: {
        fontWeight: "bold",
        fontSize: 20,
        maxWidth: 170,
        
    },
    rate: {
        color: '#6B7280'
    },
    address: {
        color: '#6B7280',
        maxWidth:170,
        marginLeft: -4
    },
    iconStyle: {
        color: '#32B768',
        paddingLeft: 20
    }
});

export default ResultsDetail;
