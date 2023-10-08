import React, { useEffect, useRef, useState } from 'react';
import { View, Animated, Easing } from 'react-native';

const SolarEclipse = () => {
  const sunSize = 100; // Size of the sun
  const moonSize = 100; // Size of the moon
  const eclipseDuration = 3000; // Animation duration in milliseconds

  const moonX = useRef(new Animated.Value(-moonSize)).current;
  const [backgroundColor, setBackgroundColor] = useState('skyblue'); // Initial background color
  const [isEclipse, setIsEclipse] = useState(false);

  useEffect(() => {
    const eclipseAnimation = Animated.timing(moonX, {
      toValue: sunSize / 2, // Move the moon to the center of the sun
      duration: eclipseDuration,
      easing: Easing.linear,
      useNativeDriver: false,
    });

    // Reverse the animation to create the eclipse effect
    const reverseAnimation = Animated.timing(moonX, {
      toValue: -moonSize, // Move the moon back out of the sun
      duration: eclipseDuration,
      easing: Easing.linear,
      useNativeDriver: false,
    });

    const runAnimation = () => {
      setIsEclipse(true);
      Animated.sequence([eclipseAnimation, reverseAnimation]).start(() => {
        setIsEclipse(false);
      });
    };

    runAnimation();
  }, [moonX]);

  // Check if the moon is touching the sun and update the background color accordingly
  useEffect(() => {
    if (isEclipse) {
      setBackgroundColor('black'); // Eclipse is occurring, change background to blue
    } else {
      setBackgroundColor('skyblue'); // Moon is not touching, use the initial background color
    }
  }, [isEclipse]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor }}>
      <View
        style={{
          width: sunSize,
          height: sunSize,
          backgroundColor: 'yellow',
          borderRadius: sunSize / 2,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Animated.View
          style={{
            width: moonSize,
            height: moonSize,
            backgroundColor: 'grey',
            borderRadius: moonSize / 2,
            position: 'absolute',
            left: moonX,
          }}
        />
      </View>
    </View>
  );
};

export default SolarEclipse;
