import React from 'react';
import { View, StyleSheet } from 'react-native';
import StarAnimation from './StarAnimation';
import { useNavigation } from '@react-navigation/native';

function MyScreen() {
  const navigations = useNavigation();

  return (
    <View style={styles.container}>
      <StarAnimation navigation={navigations}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MyScreen;
