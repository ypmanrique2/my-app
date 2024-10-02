import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type WelcomeScreenProps = {
    navigation: NativeStackNavigationProp<any>;
};

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
    return (
        <ImageBackground
            source={require('../../assets/images/background.jpg')} // Ajusta la ruta a tu imagen
            style={styles.background}
        >
            <View style={styles.container}>
                <Text style={styles.welcomeText}>Bienvenido a EduFree</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Iniciar Sesión</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-start', // Asegura que el contenido esté en la parte superior
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    welcomeText: {
        fontSize: 24,
        marginBottom: 20,
        color: '#fff', // Color del texto
    },
    button: {
        backgroundColor: '#800080', // Color morado
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: '#fff', // Color del texto del botón
        fontSize: 18,
        textAlign: 'center',
    },
});

export default WelcomeScreen;