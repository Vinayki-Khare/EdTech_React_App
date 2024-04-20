import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity,
    ScrollView } from 'react-native'
import React from 'react'
import Colors from '../../assets/colour'

const Register = () => {
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Image source={require('../../assets/images/icon.png')}
                // style={styles.image} 
                />
                <Text style={styles.heading}>ED Tech</Text>
            </View>
            <Text style={styles.heading1}>Start a Journey with Us</Text>
            <ScrollView style={styles.container2}>
                <Text style={styles.text1}>Register</Text>
                <TextInput
                    placeholder='Email'
                    placeholderTextColor={Colors.black}
                    inputMode='text'
                    style={styles.input} />
                <View>
                    <TextInput
                        placeholder='Password'
                        // secureTextEntry={true}
                        placeholderTextColor={Colors.black}
                        style={styles.input} />
                </View>
                <TextInput
                    placeholder='Phone'
                    placeholderTextColor={Colors.black}
                    inputMode='text'
                    style={styles.input} />
                <Text style={styles.text6}>Register as a ?</Text>
                <TouchableOpacity style={styles.button}>
                <Text style={styles.text5}>Register</Text>
                </TouchableOpacity>
                <View style={[styles.container1,{marginTop:"-5%"}]}>
                    <Text style={styles.text3}>Have an account ? </Text>
                    <Text style={styles.text4}> Login</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    container1: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        paddingTop: "10%",
        paddingLeft: "10%",
        paddingRight: "10%",
        marginTop: '10%'
    },
    image: {
        width: "200px",
        // height: "200px"
    },
    heading: {
        color: Colors.dblack,
        fontSize: 50,
        fontWeight: "bold",
    },
    heading1: {
        color: Colors.black,
        fontSize: 30,
        fontWeight: "bold",
        textAlign:"center",
        marginTop:"10%",
    },
    container2: {
        padding: "5%",
        backgroundColor: Colors.pwhite,
        borderColor: Colors.pwhite,
        borderWidth: 2,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        marginTop: '10%',
    },
    text1: {
        color: Colors.black,
        fontSize: 25,
        marginTop: '5%',
    },
    text2: {
        color: Colors.gray,
        fontSize: 18,
        marginTop: '5%',
        textAlign: "right"
    },
    input: {
        backgroundColor: Colors.pwhite,
        borderBottomColor: Colors.dblack,
        borderTopColor: Colors.pwhite,
        borderLeftColor: Colors.pwhite,
        borderRightColor: Colors.pwhite,
        borderWidth: 2,
        fontSize: 20,
        marginTop: "10%",
        padding: '2%'
    },
    text3: {
        color: Colors.dblack,
        fontSize: 15,
        marginTop: '5%',
    },
    text4: {
        color: Colors.blue,
        fontSize: 15,
        marginTop: '5%',
    },
    button:{
        backgroundColor:Colors.blue,
        padding:"5%",
        borderRadius:15,
        alignItems:"center",
        marginTop:"15%"
    },
    text5: {
        color: Colors.pwhite,
        fontSize: 25,
    },
    text6: {
        color: Colors.black,
        fontSize: 20,
        marginTop:'15%'
    },
})