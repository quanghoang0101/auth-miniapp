import * as React from 'react';
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { electrodeBridge } from 'react-native-electrode-bridge';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { GlobalStyles } from "../common/styles/GlobalStyle";
import { ViewInput } from "../common/ui/ViewInput";
import { Button } from "../common/ui/Button";

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

type Props = {
    navigation: ProfileScreenNavigationProp;
};

const LoginScreen = ({navigation}: Props) => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={[styles.container, GlobalStyles.container]}>
                <ViewInput title="Phone" placeholder="505-287-8051" viewstyle={{paddingTop: 30}} />
                <ViewInput title="Password" placeholder="At least 8 characters"/>
                <Button title="Log in" style={styles.loginButton} onPressed={() => onDonePressed()}/>
                <Text style={styles.signUpTitle}>Don’t have account? <Text style={[styles.signUpTitle, styles.titleClickable]} onPress={() => navigation.push('Signup')}>Sign Up</Text></Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const onDonePressed = () => {
    electrodeBridge.emitEvent('auth.event.done');
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingLeft:24, 
        paddingRight: 24
    },

    signUpTitle: {
        fontSize: 16,
        fontWeight: "400",
        paddingTop: 10
    },

    loginButton: {
        marginRight:0, 
        marginLeft: 0, 
        marginTop: 60
    },

    titleClickable: {
        color: "#3971b9"
    }
})

export default LoginScreen;