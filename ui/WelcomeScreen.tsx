import { Image, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from "../App";

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Welcome'
>;

type Props = {
    navigation: ProfileScreenNavigationProp;
  };
  
const WelcomeScreen = ({navigation}: Props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.intro} source={require('../assets/intro.png')} />
            <Text style={styles.title}>Let's Start Your Journey to Smarter Ewallet</Text>
            <Text style={styles.subtitle}>Consumer Loan Payment, pay bills and many other services</Text>
            <TouchableHighlight style={styles.submit} onPress={() =>  navigation.navigate("Login")}>
                <Text style={[styles.submitText]}>Get Started</Text>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8F8F8',
        alignContent: 'center',
        alignItems: 'center',
        flex: 1,
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

export default WelcomeScreen