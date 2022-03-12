import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
            autoCapitalize="none"
            autoCorrect={false}
                style={styles.inputStyle}
                placeholder="Search"
                value={term}
                // onChangeText={(newTerm) => onTermChange(newTerm)} below is the short way
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 15,
        backgroundColor: "#E6E7E9",
        height: 40,
        borderRadius: 14,
        marginHorizontal: 35,
        flexDirection: "row",
        marginBottom: 20
    },
    inputStyle: {
        flex: 1,
        fontSize: 15,
    },
    iconStyle: {
        fontSize: 21,
        alignSelf: "center",
        marginHorizontal: 15,
        color: '#9CA3AF'
    },
});

export default SearchBar;
