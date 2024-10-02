import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import WelcomeScreen from '../screens/WelcomeScreen';

type IndexScreenProps = {
  navigation: NativeStackNavigationProp<any>;
  route: RouteProp<any>;
};

const IndexScreen: React.FC<IndexScreenProps> = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <WelcomeScreen navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default IndexScreen;