import React from 'react';
import { View, Text } from 'react-native';

 import { styles } from './styles';

 interface IHeaderProps {
  title: string;
  dataHora: string;
 }

const Header: React.FC<IHeaderProps> = ({title, dataHora}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{dataHora}</Text>
    </View>
  );
}

export default Header;