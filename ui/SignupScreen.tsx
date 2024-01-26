import * as React from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { GlobalStyles } from "../common/styles/GlobalStyle";
import { ViewInput } from "../common/ui/ViewInput";
import { Button } from "../common/ui/Button";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

type Props = {
    navigation: ProfileScreenNavigationProp;
};

const SignupScreen = ({navigation}: Props) => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <ScrollView style={GlobalStyles.container} automaticallyAdjustKeyboardInsets={true}>
                <View style={styles.container} >
                    <ViewInput title="Username" placeholder="Enter your name" viewstyle={{paddingTop: 30}}/>
                    <ViewInput title="Phone" placeholder="505-287-8051"/>
                    <ViewInput title="Password" placeholder="At least 8 characters"/>
                    <ViewInput title="Confirm password" placeholder="At least 8 characters"/>
                    <Button title="Register" style={styles.registerButton} onPressed={() => navigation.navigate("Success")}/>
                    <Text style={styles.navTitle}>Already have account? <Text style={[styles.navTitle, styles.titleClickable]} onPress={() => navigation.pop()}>Login</Text></Text>
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingLeft:24, 
        paddingRight: 24
    },

    registerButton: {
        marginRight:0, 
        marginLeft: 0, 
        marginTop: 30
    },

    navTitle: {
        fontSize: 16,
        fontWeight: "400",
        paddingTop: 10
    },

    titleClickable: {
        color: "#3971b9"
    }
});

export default SignupScreen;