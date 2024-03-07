import React from 'react';
import { Text, View } from 'react-native';

import Ingredients from '@/components/Ingredients';

import { styles } from './styles';

const index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Escolha {'\n'}
        <Text style={styles.subtitle}>os produtos</Text>
      </Text>

      <Text style={styles.message}>Descubra receitas baseadas nos {'\n'} produtos que você escolheu</Text>

      <Ingredients />
    </View>
  );
}

export default index;