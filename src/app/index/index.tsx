import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';

import Ingredients from '@/components/Ingredients';

import { styles } from './styles';
import Selected from '@/components/Selected';

const index = () => {
  const [selected, setSelected] = useState<string[]>([])

  function handleToggleSelected(value: string) {
    if (selected.includes(value)) {
      return setSelected((state) => state.filter((item) => item !== value))
    }

    setSelected((state) => [...state, value])
  }

  function handleClearSelected() {
    Alert.alert("Limpar", "Deseja limpar tudo?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => setSelected([]) }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Escolha {'\n'}
        <Text style={styles.subtitle}>os produtos</Text>
      </Text>

      <Text style={styles.message}>Descubra receitas baseadas nos {'\n'} produtos que você escolheu</Text>

      <Ingredients selected={selected} handleToggle={handleToggleSelected} />

      {selected.length > 0 && (
        <Selected
          quantity={selected.length}
          onClear={handleClearSelected}
          onSearch={() => { }}
        />
      )}
    </View>
  );
}

export default index;