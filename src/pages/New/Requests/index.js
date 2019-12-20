import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

// import { Container } from './styles';
import Background from '~/components/Background';

export default function Requests({ navigation }) {
  return (
    <Background>
      <TouchableOpacity onPress={() => navigation.navigate('NewRequest')}>
        <Text>Clique</Text>
      </TouchableOpacity>
    </Background>
  );
}
