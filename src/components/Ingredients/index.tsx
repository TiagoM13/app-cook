import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import Ingredient from '../Ingredient';

import { styles } from './styles';

type Props = {
  selected: string[]
  handleToggle: (index: string) => void
}

const Ingredients = ({ selected, handleToggle }: Props) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {Array.from({ length: 100 }).map((_, index) => (
        <Ingredient
          key={index}
          name='Maça'
          image=''
          selected={selected.includes(String(index))}
          onPress={() => handleToggle(String(index))}
        />
      ))}
    </ScrollView>
  );
}

export default Ingredients;