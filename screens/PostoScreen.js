import React from 'react';
import { View, Text, Button, TextInput, SafeAreaView, Image, StyleSheet } from 'react-native';


const precoGasolina =parseFloat(document.getElementById("gasolina").value);
const precoAlcool = parseFloat(document.getElementById("alcool").value);

if (isNaN(precoGasolina)) {
    msgResultado.innerHTML = "Preço da Gasolina inválido";
    return;
}

if (isNaN(precoAlcool)) {
    msgResultado.innerHTML = "Preço do Álcool inválido";
    return;
}

console.log(precoAlcool / precoGasolina);

if ((precoAlcool / precoGasolina) >= 0.7)
    msgResultado.innerHTML = "Abasteca com Gasolina";
else
    msgResultado.innerHTML = "Abasteca com Álcool";

