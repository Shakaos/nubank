import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Animated } from 'react-native';

// Componente de Cabeçalho
const Header = () => (
  <View style={styles.cabecalho}>
    <View style={styles.boxIconesCabecalho}>
      <View style={styles.circulo}>
        <Image style={styles.icone} source={require('./assets/img/usuario.png')} />
      </View>
      <View style={styles.itensIcones}>
        <Image style={styles.icone} source={require('./assets/img/olho.png')} />
        <Image style={styles.icone} source={require('./assets/img/ajuda.png')} />
        <Image style={styles.icone} source={require('./assets/img/email.png')} />
      </View>
    </View>
    <View style={styles.boxTextUsuario}>
      <Text style={styles.textUsuario}>Olá, Gabriela</Text>
      <Text style={styles.textBeneficios}>Conheça seus benefícios</Text>
    </View>
  </View>
);

// Componente de Botão
const ActionButton = ({ icon, label, onPress, offset }) => (
  <Animated.View style={{ transform: [{ translateX: offset }] }}>
    <View style={styles.botaoItem}>
      <TouchableOpacity style={styles.botaoCirculo} onPress={onPress}>
        <Image style={styles.botaoIcone} source={icon} />
      </TouchableOpacity>
      <Text style={styles.botaoText}>{label}</Text>
    </View>
  </Animated.View>
);

// Componente de Card
const Card = ({ title, amount, details }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{title}</Text>
    {amount && <Text style={styles.cardAmount}>{amount}</Text>}
    {details && <Text style={styles.cardDetails}>{details}</Text>}
  </View>
);

export default function App() {
  const [offset] = useState(new Animated.Value(0));

  const moveButtons = (direction) => {
    Animated.timing(offset, {
      toValue: direction === 'left' ? -50 : 50,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      offset.setValue(0);
    });
  };

  const buttons = [
    { icon: require('./assets/img/pix.png'), label: 'Pix', direction: 'left' },
    { icon: require('./assets/img/pagar.png'), label: 'Pagar', direction: 'right' },
    { icon: require('./assets/img/transferir.png'), label: 'Transferir', direction: 'left' },
    { icon: require('./assets/img/depositar.png'), label: 'Depositar', direction: 'right' },
    { icon: require('./assets/img/emprestimo.png'), label: 'Empréstimos', direction: 'left' },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header />

      <ScrollView style={styles.content}>
        {/* Saldo disponível */}
        <View style={styles.saldoContainer}>
          <Text style={styles.saldoTitle}>Saldo disponível</Text>
          <Text style={styles.saldoAmount}>R$ 5.301,90</Text>
        </View>

        {/* Botões: Pix, Pagar, Transferir, Depositar, Empréstimos */}
        <View style={styles.botoesContainer}>
          {buttons.map((button, index) => (
            <ActionButton
              key={index}
              icon={button.icon}
              label={button.label}
              onPress={() => moveButtons(button.direction)}
              offset={offset}
            />
          ))}
        </View>

        {/* Cashback e Benefícios */}
        <Card title="Cashback e Benefícios" amount="R$ 83,27" />

        {/* Meus cartões */}
        <Card title="Meus cartões" details="Gerencie seus cartões" />

        {/* Central de Proteção */}
        <Card title="Central de Proteção" details="Seus beneficios" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  cabecalho: {
    backgroundColor: '#490C74',
    width: '100%',
    height: 140,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  icone: {
    width: 20,
    height: 20,
  },
  circulo: {
    width: 40,
    height: 40,
    backgroundColor: '#9603E8',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxIconesCabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itensIcones: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 15,
  },
  boxTextUsuario: {
    marginTop: 10,
  },
  textUsuario: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textBeneficios: {
    color: 'white',
    fontSize: 14,
    marginTop: 5,
  },
  content: {
    flex: 1,
  },
  saldoContainer: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  saldoTitle: {
    fontSize: 16,
    color: '#666',
  },
  saldoAmount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 5,
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20,
  },
  botaoItem: {
    alignItems: 'center',
  },
  botaoCirculo: {
    backgroundColor: '#fff',
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    margin: 5,
  },
  botaoIcone: {
    width: 30,
    height: 30,
  },
  botaoText: {
    fontSize: 14,
    color: '#000',
    marginTop: 5,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  cardDetails: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  cardAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
  },
});