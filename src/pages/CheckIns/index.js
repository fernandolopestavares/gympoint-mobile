import React from 'react';
import { Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';

// import { Container } from './styles';

export default function CheckIns() {
  return (
    <Background>
      <Text>Checkins</Text>
    </Background>
  );
}

CheckIns.navigationOptions = {
  tabBarLabel: 'Checkins',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="check" size={20} color={tintColor} />
  ),
};
