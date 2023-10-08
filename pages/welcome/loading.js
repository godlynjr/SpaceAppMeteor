import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import LoadingTextAnimation from './textAnimation';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../../assets/page2.png')}
        style={styles.fullscreen}
      />
      <View style={styles.loadingContainer}>
        <LoadingTextAnimation />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullscreen: {
    width: '100%',
    height: '100%',
  },
  loadingContainer: {
    position: 'absolute',
    top: 600,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingScreen;

// import React, { Component } from 'react';
// import { Animated, Image, View, StyleSheet } from 'react-native';

// class ImageTransition extends Component {
//   constructor() {
//     super();
//     this.state = {
//       imageIndex: 0,
//       fadeAnim: new Animated.Value(0),
//     };
//   }

//   componentDidMount() {
//     // Start the initial image with fade-in animation
//     this.fadeIn();
    
//     // Start the timer for automatic image transition
//     this.startImageTransitionTimer();
//   }

//   fadeIn() {
//     Animated.timing(this.state.fadeAnim, {
//       toValue: 1,
//       duration: 500, // Adjust the duration as needed
//       useNativeDriver: true,
//     }).start();
//   }

//   fadeOut() {
//     Animated.timing(this.state.fadeAnim, {
//       toValue: 0,
//       duration: 500, // Adjust the duration as needed
//       useNativeDriver: true,
//     }).start(() => {
//       // After fade-out, transition to the next image
//       this.changeImage();
//     });
//   }

//   changeImage() {
//     // Change the image index
//     const newIndex = (this.state.imageIndex + 1) % 3;

//     this.setState({ imageIndex: newIndex }, () => {
//       // After updating the image index, fade in the new image
//       this.fadeIn();

//       // Start the timer for the next automatic image transition
//       this.startImageTransitionTimer();
//     });
//   }

//   startImageTransitionTimer() {
//     setTimeout(() => {
//       this.fadeOut();
//     }, 1000);
//   }

//   render() {
//     const { fadeAnim, imageIndex } = this.state;

//     const images = [
//       require('../../assets/page3.png'),
//       require('../../assets/page4.png'),
//       require('../../assets/page2.png'),
//     ];

//     return (
//       <View style={styles.container}>
//         <Animated.Image
//           source={images[imageIndex]}
//           style={[
//             styles.image,
//             {
//               opacity: fadeAnim,
//             },
//           ]}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   image: {
//     width: "100%",
//     height: "100%",
//   },
// });

// export default ImageTransition;
