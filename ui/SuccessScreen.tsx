import * as React from 'react';
import { Image, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../common/styles/GlobalStyle";
import { Button } from "../common/ui/Button";
import { AuthUserApi } from 'react-native-auth-api';
import userData from '../assets/data.json';

export const SuccessScreen = () => {
    return (
        <View style={[GlobalStyles.container, styles.container]}>
            <Image style={styles.art} source={require('../assets/success.png')} />
            <Text style={styles.title}>Congratulations!</Text>
            <Text style={styles.subtitle}>Everything will be fine!</Text>
            <Button title="Done" style={styles.button} onPressed={() => onDonePressed()}/>
        </View>
    );
}

const onDonePressed = () => {
    AuthUserApi.events().emitAuthUserEvent(userData)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    art: {
        width: 287,
        height: 367
    },
    title: {
        paddingTop: 37,
        fontSize: 25,
        fontWeight: "500"
    },
    subtitle: {
        fontSize: 14,
        fontWeight: "400",
    },

    button: {
        marginTop: 60
    }
})

export default SuccessScreen;