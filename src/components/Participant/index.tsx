import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

 import { styles } from './styles';

const Participant: React.FC = () => {
  return (
    <View style={styles.container}>
       <Text style={styles.title}>Italo Guglielmini</Text>
       <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>
          -
        </Text>
       </TouchableOpacity>
    </View>
  );
}

export default Participant;