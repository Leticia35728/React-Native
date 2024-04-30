//No arquivo CadastroScreen.js 

import React from 'react';
import { View, Text, Button, SafeAreaView, TextInput, StyleSheet } from 'react-native';

const CadastroScreen = ({ navigation }) => {
  return (
    <View style={styles.pagina}>
      <Text style={styles.texto1}>Tela de Cadastro</Text>

      <TextInput style={styles.nomeCadastro}
        placeholder='Nome Completo:'
        keyboardType='text'
      />
      <TextInput style={styles.DataCadastro}
        placeholder='Data de Nascimento:'
        keyboardType='Number'
      />
      <TextInput style={styles.EmailCadastro}
        placeholder='Email:'
        keyboardType='email-address'
      />
      <TextInput style={styles.SenhaCadastro}
        placeholder='Senha:'
        returnKeyType='Password'
      />
      <Button
        title="Ir para Login"
        onPress={() => navigation.navigate('Login')}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  pagina: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    flex: 1,
  },

  nomeCadastro: {
    margin: 10,
    borderColor: 'gray',
    borderWidth: 5,
    height: 35,
    width: '25%',
    fontSize: 15,
  },

  EmailCadastro: {
    margin: 10,
    borderColor: 'gray',
    borderWidth: 5,
    height: 35,
    width: '25%',
    fontSize: 15,
  },

  SenhaCadastro: {
    margin: 10,
    borderColor: 'gray',
    borderWidth: 5,
    height: 35,
    width: '25%',
    fontSize: 15,
  },
  DataCadastro: {
    margin: 10,
    borderColor: 'gray',
    borderWidth: 5,
    height: 35,
    width: '25%',
    fontSize: 15,
  },
  texto1: {
    fontSize: 40,
    margin: 10,
    fontFamily: 'bold',
  }

})

export default CadastroScreen;