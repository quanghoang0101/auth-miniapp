import * as React from 'react';
import { Image, StyleSheet, Text, View } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from "../App";
import { Button } from "../common/ui/Button";
import { GlobalStyles } from "../common/styles/GlobalStyle";

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Welcome'
>;

type Props = {
    navigation: ProfileScreenNavigationProp;
};
  
const WelcomeScreen = ({navigation}: Props) => {
    return (
        <View style={[styles.container, GlobalStyles.container]}>
            <Image style={styles.intro} source={require('../assets/intro.png')} />
            <Text style={styles.title}>Let's Start Your Journey to Smarter Ewallet</Text>
            <Text style={styles.subtitle}>Consumer Loan Payment, pay bills and many other services</Text>
            <Button title="Get Started" onPressed={() => navigation.navigate("Login")}  />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    intro: {
        width: 300,
        height: 300
    },
    
    title : {
        fontSize: 30,
        fontStyle: "normal",
        fontWeight: "500",
        color: "#232440",
        textAlign: "center",
        paddingTop: 50,
        paddingBottom: 8,
        paddingLeft: 32,
        paddingRight: 32
    },

    subtitle : {
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "400",
        color: "#232440",
        paddingBottom: 40,
        textAlign: "center",
        paddingLeft: 48,
        paddingRight: 48
    },
});

export default WelcomeScreen