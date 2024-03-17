import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import Ingredient from '../Ingredient';

import { styles } from './styles';
import { services } from '@/services';

type Props = {
  ingredients: IngredientResponse[]
  selected?: string[]
  handleToggle?: (index: string) => void
}

const Ingredients = ({ ingredients, selected, handleToggle }: Props) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {ingredients.map((item, index) => (
        <Ingredient
          key={index}
          name={item.name}
          image={`${services.storage.imagePath}/${item.image}`}
          selected={selected?.includes(item.id)}
          onPress={() => handleToggle!(item.id)}
        />
      ))}
    </ScrollView>
  );
}

export default Ingredients;