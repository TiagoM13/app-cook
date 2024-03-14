import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { router } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons'

import { styles } from './styles';
import { Recipe } from '@/components/Recipe';

const Recipes = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name='arrow-back' size={32} onPress={() => router.back()} />

        <Text style={styles.title}>Ingredientes</Text>

        <FlatList
          data={["1"]}
          keyExtractor={item => item}
          renderItem={() => (
            <Recipe
              recipe={{
                name: "Omelete",
                image: "https://t3.ftcdn.net/jpg/00/64/26/08/360_F_64260820_A6dMOnMhSmA9hrOP8U0Yz64W9AYkM0QM.jpg",
                minutes: 10
              }}
            />
          )}
        />
      </View>
    </View>
  );
}

export default Recipes;