import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Header from "../../components/Header";
import Participant from "../../components/Participant";

import { styles } from "./styles";

export default function Evento() {
  const participantes = [
    "Italo",
    "Isaac",
    "Vitor",
    "Lucas",
    "Robertinho",
    "Daniely",
    "Dionisio",
    "Bebeto",
    "Didico",
    "Vinicius",
    "Allysson",
  ];

  function handleParticipantAdd() {
    console.log("add Participant");
  }

  function handleParticpantRemove(name: string) {
    console.log(`Você removeu o participante ${name}`);
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
        data={participantes}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticpantRemove("Italo Guglielmini")}
          />
        )}
        ListEmptyComponent={() => (
            <Text style={styles.listEmptyText}>
                Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença
            </Text>
        )}
      />
    </View>
  );
}
