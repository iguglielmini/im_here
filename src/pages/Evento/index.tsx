import React from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import Header from "../../components/Header";

import { styles } from "./styles";

export default function Evento() {

    function handleParticipantAdd(){
        console.log('add Participant');
    }


    return (
        <View style={styles.container}>
            <Header title="Nome do evento" dataHora="Sexta, 4 de Novembro de 2022." />
            <View style={styles.contentInput}>
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#6B6B6B"
                    placeholder="Nome do participante"
                />
                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.textButton}>+</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>Participantes</Text>
        </View>
    );
}
