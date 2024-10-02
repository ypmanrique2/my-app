import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.loginText}>Iniciar Sesión</Text>
            <TextInput placeholder="Correo Electrónico" style={styles.input} />
            <TextInput
                placeholder="Contraseña"
                style={styles.input}
                secureTextEntry
            />
            <Button title="Entrar" onPress={() => alert('Login Clicked')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    loginText: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
    },
});

export default LoginScreen;