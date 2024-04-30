//No arquivo LoginScreen.js

import React from 'react';
import { View, Text, Button, TextInput, SafeAreaView, Image, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.Campo}>
      <Image
        style={styles.Imagem}
        source={require('../assets/java.1.jpg')}
      />
      <Text style={styles.texto}>Login</Text>
      <TextInput style={styles.Email}
        placeholder='Email:'
        keyboardType='email-address'
      />
      <TextInput style={styles.Senha}
        placeholder='Senha:'
        returnKeyType='Password'
      />
      <Button
        title="Login" />
      <Button
        title="Ir para Cadastro"
        onPress={() => navigation.navigate('Cadastro')}
      />
    </View>


  );
};

const styles = StyleSheet.create({

  Campo: {
    flex: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  Email: {
    margin: 1,
    borderColor: 'gray',
    borderWidth: 5,
    height: 35,
    width: '25%',
    fontSize: 15,
  },
  Senha: {
    margin: 10,
    borderColor: 'gray',
    borderWidth: 5,
    height: 35,
    width: '25%',
    fontSize: 15,
  },
  texto: {
    fontSize: 40,
    fontFamily: 'bold',
  }

})
export default LoginScreen;

