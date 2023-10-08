import React, { Component } from 'react';
import { ImageBackground, View, Image, Animated, Easing, StyleSheet, Text, TouchableOpacity } from 'react-native';

class StarAnimation extends Component {
  constructor() {
    super();
    this.state = {
      stars: Array(7).fill().map((_, index) => ({
        id: index,
        x: Math.random() * 300, // Adjust the width of your background image
        y: Math.random() * 200, // Adjust the height of your background image
        shakeAnimation: new Animated.Value(0),
      })),
    };
  }
  
  startShakeAnimation(star) {
    Animated.sequence([
      Animated.timing(star.shakeAnimation, {
        toValue: 10,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
      Animated.timing(star.shakeAnimation, {
        toValue: -10,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
      Animated.timing(star.shakeAnimation, {
        toValue: 0,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ]).start();
  }

  componentDidMount() {
    const { stars } = this.state;
    stars.forEach((star) => {
      setTimeout(() => this.startShakeAnimation(star), Math.random() * 5000);
    });
  }
  
  render() {
    const { stars } = this.state;
    const { navigation } = this.props;

    return (
      <ImageBackground
        source={require('../../assets/background.png')} // Replace with your background image
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        {stars.map((star) => (
          <Animated.Image
            key={star.id}
            source={require('../../assets/star.png')} // Replace with your star image
            style={[
              styles.star,
              {
                transform: [
                  {
                    translateX: star.shakeAnimation,
                  },
                ],
                left: star.x,
                top: star.y,
              },
            ]}
          />
        ))}
        <View style={styles.container}>
          <Text style={styles.title}>How old are you ?</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Kids")}>
            <View>
              <Text style={styles.text}>3 - 5y</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Young")}>
            <View>
              <Text style={styles.text}>6 - 10y</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("NLK")}>
            <View>
              <Text style={styles.text}>11y+</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  star: {
    position: 'absolute',
    width: 30, // Adjust the size of your star
    height: 30, // Adjust the size of your star
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    width: '70%',
    marginTop: 100,
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
    backgroundColor: '#E7A4FF',
    padding: 10,
    borderRadius: 15,
    width: "80%",
    height: 50,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default StarAnimation;
