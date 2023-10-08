import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Learn = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
        source={require('../../assets/learnmore.png')} // Replace with your background image
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <View style={styles.container}>

          <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate("")}>
            <View>
              <Text style={styles.text}>Let's go !</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
  )
}

const styles = StyleSheet.create({
  star: {
    position: 'absolute',
    width: 30, // Adjust the size of your star
    height: 30, // Adjust the size of your star
  },
  container: {
    top: 70,
    width: "70%",
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    color: 'black',
    fontSize: 25,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  text: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#E89416',
    padding: 10,
    borderRadius: 15,
    width: "80%",
    height: 50,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    // width: "70%",
  },
  button2: {
    backgroundColor: '#A4A3A4',
    padding: 10,
    borderRadius: 15,
    width: "80%",
    height: 50,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',

  },
});

export default Learn