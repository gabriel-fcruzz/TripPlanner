import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '../ThemeContext'; // Usando o hook para acessar o tema
import styles from "../styles/PlanejamentoStyles";

const Planejamento = () => {
  const [input, setInput] = useState('');
  const [searchQuery, setSearchQuery] = useState(''); // Estado para pesquisa
  const [plans, setPlans] = useState([]);
  const { isDarkMode } = useTheme(); // Obtendo o estado do modo escuro

  useEffect(() => {
    const loadPlans = async () => {
      try {
        const storedPlans = await AsyncStorage.getItem('@travelPlans');
        if (storedPlans) {
          setPlans(JSON.parse(storedPlans));
        }
      } catch (error) {
        console.error('Erro ao carregar os planos:', error);
      }
    };

    loadPlans();
  }, []);

  const savePlans = async (newPlans) => {
    try {
      await AsyncStorage.setItem('@travelPlans', JSON.stringify(newPlans));
      setPlans(newPlans);
    } catch (error) {
      console.error('Erro ao salvar os planos:', error);
    }
  };

  const handleAddPlan = () => {
    if (input.trim()) {
      const newPlans = [...plans, input.trim()];
      savePlans(newPlans);
      setInput('');
    } else {
      Alert.alert('Erro', 'Por favor, insira um plano válido!');
    }
  };

  const handleDeletePlan = (index) => {
    const newPlans = plans.filter((_, i) => i !== index);
    savePlans(newPlans);
  };

  const handleClearPlans = () => {
    Alert.alert('Confirmar', 'Deseja apagar todos os planos?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Apagar', onPress: async () => savePlans([]) },
    ]);
  };

  // Função de busca
  const filteredPlans = plans.filter(plan =>
    plan.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={isDarkMode ? styles.darkTitle : styles.title}>Planejamento de Viagem</Text>
      
      {/* Campo de busca */}
      <TextInput
        style={isDarkMode ? styles.darkInput : styles.input}
        placeholder="Buscar planos..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      
      <TextInput
        style={isDarkMode ? styles.darkInput : styles.input}
        placeholder="Adicione um destino ou atividade..."
        value={input}
        onChangeText={setInput}
      />
      <Button title="Adicionar Plano" onPress={handleAddPlan} />
      
      {/* Lista de planos filtrada */}
      <FlatList
        data={filteredPlans} // Usando filteredPlans para exibir os planos filtrados
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.planItem}>
            <Text style={isDarkMode ? styles.darkPlanText : styles.planText}>{item}</Text>
            <Button
              title="Apagar"
              color="red"
              onPress={() => handleDeletePlan(index)}
            />
          </View>
        )}
        ListEmptyComponent={<Text style={isDarkMode ? styles.darkEmptyText : styles.emptyText}>Nenhum plano adicionado ainda!</Text>}
      />
      
      {plans.length > 0 && (
        <Button title="Limpar Todos os Planos" onPress={handleClearPlans} color="red" />
      )}
    </View>
  );
};

export default Planejamento;
