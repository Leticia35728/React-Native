import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

class TelaIMC extends Component {
    constructor(props) {
        super(props);
        this.state = { peso: '', altura: '', info: '-', resultado: '0.0' };
    }

    calculaIMC = () => {
        const { peso, altura } = this.state;
        let imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
        let info = '-';
        if (!isNaN(imc)) {
            if (imc < 18.5) {
                info = 'MENOR QUE 18.5: Magreza';
            } else if (imc < 24.9) {
                info = 'ENTRE 18.5 E 24.9: Normal';
            } else if (imc < 29.9) {
                info = 'ENTRE 25.0 E 29.9: Sobrepeso';
            } else if (imc < 39.9) {
                info = 'ENTRE 30.0 E 39.9: Obesidade';
            } else {
                info = 'MAIOR QUE 40.0: Obesidade Grave';
            }
        }
        this.setState({ resultado: imc.toFixed(2), info });
    };

    limpar = () => {
        this.setState({
            peso: '',
            altura: '',
            resultado: '0.0',
            info: '-',
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.texto}>Altura (m)</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={altura => this.setState({ altura })}
                    value={this.state.altura}
                    placeholder='Exemplo: 1.75'
                    keyboardType='numeric'
                />
                <Text style={styles.texto}>Peso (kg)</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={peso => this.setState({ peso })}
                    value={this.state.peso}
                    placeholder='Exemplo: 68.8'
                    keyboardType='numeric'
                />
                <Button
                    onPress={this.calculaIMC}
                    title='Calcular'
                    color='green'
                />
                <Button
                    onPress={this.limpar}
                    title='Limpar'
                    color='red'
                />
                <Text>Resultado: {this.state.resultado}</Text>
                <Text>Informação: {this.state.info}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    texto: {
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        width: '100%',
    },
});

export default TelaIMC;