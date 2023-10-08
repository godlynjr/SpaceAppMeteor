import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const Moon2 = () => {
  const navigation = useNavigation();

  const navigateToNextPage = () => {
    // Navigate to the next page here (e.g., "Young" or any desired screen name)
    navigation.navigate("SolarEclips");
  };

  return (
    <View>
      <ImageBackground 
        source={require('../../assets/moon2.png')}
        style={styles.fullscreen}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={navigateToNextPage}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
    fullscreen: {
      width: "100%",
      height: "100%",
    },
    button: {
      position: 'absolute',
      top: 100, // Adjust the top position as needed
      right: 20, // Adjust the right position as needed
      backgroundColor: 'blue', // Change to your desired button style
      padding: 10,
      borderRadius: 10,
      height: 50,
      width: 100,
      alignContent: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
    },
  });

export default Moon2;
