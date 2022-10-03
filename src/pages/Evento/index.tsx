import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    Alert,
} from "react-native";
import Header from "../../components/Header";
import Participant from "../../components/Participant";

import { styles } from "./styles";

export default function Evento() {
    const [participants, setParticipants] = useState(['Italo']);

    function handleParticipantAdd() {
        if (participants.includes('Italo')) {
            return Alert.alert(
                "Participante existe",
                "Já existe um participante com esse nome."
            );
        }

        setParticipants(prevState => [...prevState,'Ana']);
    }

    function handleParticpantRemove(name: string) {
        Alert.alert("Remover", `Remover o participante ${name}?`, [
            {
                text: "Sim",
                onPress: () => Alert.alert("Deletado!"),
            },
            {
                text: "Não",
                style: "cancel",
            },
        ]);
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

            <FlatList
                data={participants}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={() => handleParticpantRemove(item)}
                    />
                )}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguém chegou no evento ainda? Adicione participantes a sua lista
                        de presença
                    </Text>
                )}
            />
        </View>
    );
}
