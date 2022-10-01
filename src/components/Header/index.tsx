import React from 'react';
import { View, Text } from 'react-native';

 import { styles } from './styles';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Nome do evento</Text>
        <Text style={styles.subtitle}>Sexta, 4 de Novembro de 2022.</Text>
    </View>
  );
}

export default Header;