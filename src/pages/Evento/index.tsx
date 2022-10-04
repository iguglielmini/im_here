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
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantsName, setParticipantsName] = useState("");

  function handleParticipantAdd() {
    if (participants.includes(participantsName)) {
      return Alert.alert(
        "Participante existe",
        "Já existe um participante com esse nome."
      );
    }

    setParticipants((prevState) => [...prevState, participantsName]);
    setParticipantsName("");
  }

  function handleParticpantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setParticipants((prevState) =>
            prevState.filter((participant) => participant !== name)
          ),
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
          onChangeText={setParticipantsName}
          value={participantsName}
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
