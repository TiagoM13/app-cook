import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import Ingredient from '../Ingredient';

import { styles } from './styles';

const Ingredients: React.FC = () => {
  const [selected, setSelected] = useState<string[]>([])

  function handleToggleSelected(value: string) {
    if (selected.includes(value)) {
      return setSelected((state) => state.filter((item) => item !== value))
    }

    setSelected((state) => [...state, value])
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {Array.from({ length: 100 }).map((_, index) => (
        <Ingredient
          key={index}
          name='Tomate'
          image=''
          selected={selected.includes(String(index))}
          onPress={() => handleToggleSelected(String(index))}
        />
      ))}
    </ScrollView>
  );
}

export default Ingredients;