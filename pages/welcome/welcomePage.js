import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomePage = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ImageBackground 
                source={require('../../assets/welcome.png')}
                style={styles.fullscreen}
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Loading")}>
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    fullscreen: {
        width: "100%",
        height: "100%",
    },
    button: {
        backgroundColor: '#0077C2',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 100,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default WelcomePage;
