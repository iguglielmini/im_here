import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

 import { styles } from './styles';

 interface IParticipantProps{
  name: string;
  onRemove: () => void;
 }

const Participant: React.FC<IParticipantProps> = ({name, onRemove}) => {
  return (
    <View style={styles.container}>
       <Text style={styles.title}>{name}</Text>
       <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>
          -
        </Text>
       </TouchableOpacity>
    </View>
  );
}

export default Participant;