import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoadingTextAnimation = () => {
  const [dots, setDots] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const interval = setInterval(() => {
      if (dots.length < 3) {
        setDots(dots + '.');
      } else {
        setDots('');
        clearInterval(interval);

        setTimeout(() => {
          navigation.navigate('Screen');
        }, 1000);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [dots, navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'white', fontSize: 20 }}>loading{dots}</Text>
    </View>
  );
};

export default LoadingTextAnimation;
