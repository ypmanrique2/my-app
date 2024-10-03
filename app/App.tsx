import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../app/screens/WelcomeScreen';
import LoginScreen from '../app/screens/LoginScreen';
/* import { useStore } from 'zustand';
import { useStore } from './state/store'; */
import { View, Text, Button, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

/* const MyComponent = () => {
    const count = useStore((state) => state.count);
    const increment = useStore((state) => state.increment);

    return (
    <View>
    <Text>Count: {count}</Text>
    <Button title="Increment" onPress={increment} />
    </View>
    );
};

export default MyComponent; */

export default App;