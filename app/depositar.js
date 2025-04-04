import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function DepositarScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Depositar</Text>
      
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Depósito por Boleto</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Depósito por TED</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Depósito por DOC</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Depósito em Cheque</Text>
        </TouchableOpacity>
      </View>
      
      <Link href="/" asChild>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>Voltar</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#490C74',
    marginBottom: 30,
    textAlign: 'center',
  },
  optionsContainer: {
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  optionText: {
    fontSize: 18,
    color: '#490C74',
  },
  backButton: {
    backgroundColor: '#490C74',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  backButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});