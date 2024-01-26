import React from 'react';
import { GestureResponderEvent, StyleProp, StyleSheet, Text, TouchableHighlight, ViewStyle } from "react-native";

interface BProps {
    title: string,
    style?: StyleProp<ViewStyle>,
    onPressed: ((event: GestureResponderEvent) => void) | undefined;
}
  
export const Button = ({title, style, onPressed}: BProps) => {
    return (
        <TouchableHighlight style={[styles.submit, style ?? []]} onPress={onPressed}>
            <Text style={[styles.submitText]}>{title}</Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    submit: {
        marginRight: 32,
        marginLeft: 32,
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#3971b9',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#fff',
        alignSelf: 'stretch'
      },

      submitText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 17
      }
});