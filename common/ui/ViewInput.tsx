import * as React from 'react';
import { StyleProp, StyleSheet, Text, TextInput, View, ViewStyle } from "react-native";
import { GlobalStyles } from "../styles/GlobalStyle";
import { useState } from 'react';

interface InputProps {
    title: string,
    placeholder?: string,
    viewstyle?: StyleProp<ViewStyle>,
}

export const ViewInput = ({title, placeholder, viewstyle}: InputProps) => {

    const [isFocused, setIsFocused] = useState(false);
    
    return (
        <View style={[GlobalStyles.fullWidth, viewstyle]}>
            <Text style={styles.title}>{title}</Text>
            <TextInput  placeholder={placeholder} style={[styles.input, isFocused ? styles.inputActive : styles.inputInactive]} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 15,
        fontWeight: "400",
        paddingBottom: 5,
        color: "black"
    },
    input: {
        color: "#000",
        height: 60,     
        borderWidth: 1, 
        borderRadius: 10,  
        marginBottom: 20, 
        fontSize: 15,
        backgroundColor: "#F8F8F8",
        paddingLeft: 10,
        paddingRight: 10
    },

    inputInactive: {
        borderColor: '#E5E5E5',
    },

    inputActive: {
        borderColor: '#3971b9',
    }
});