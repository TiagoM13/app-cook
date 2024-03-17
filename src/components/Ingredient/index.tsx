import React from 'react';
import { Image, Pressable, PressableProps, Text } from 'react-native';

import { styles } from './styles';

export type IngredientProps = {
  name: string
  image: string
  selected?: boolean
}

const Ingredient = ({ name, image, selected = false, ...rest }: IngredientProps & PressableProps) => {
  return (
    <Pressable style={[styles.container, selected && styles.seleted]} {...rest}>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.title}>{name}</Text>
    </Pressable>
  );
}

export default Ingredient;