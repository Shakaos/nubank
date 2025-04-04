import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Animated } from 'react-native';
import { Link } from 'expo-router';

// Componente de Cabeçalho atualizado
const Header = ({ hideBalance, toggleBalance }) => (
  <View style={styles.cabecalho}>
    <View style={styles.boxIconesCabecalho}>
      <View style={styles.circulo}>
        <Image style={styles.icone} source={require('../assets/img/usuario.png')} />
      </View>
      <View style={styles.itensIcones}>
        <TouchableOpacity onPress={toggleBalance}>
          <Image 
            style={styles.icone} 
            source={hideBalance 
              ? require('../assets/img/olho-fechado.png') 
              : require('../assets/img/olho.png')} 
          />
        </TouchableOpacity>
        <Image style={styles.icone} source={require('../assets/img/ajuda.png')} />
        <Image style={styles.icone} source={require('../assets/img/email.png')} />
      </View>
    </View>
    <View style={styles.boxTextUsuario}>
      <Text style={styles.textUsuario}>Olá, Gabriela</Text>
      <Text style={styles.textBeneficios}>Conheça seus benefícios</Text>
    </View>
  </View>
);

// Componente de Botão atualizado
const ActionButton = ({ icon, label, screen }) => (
  <View style={styles.botaoItem}>
    <Link href={screen} asChild>
      <TouchableOpacity style={styles.botaoCirculo}>
        <Image style={styles.botaoIcone} source={icon} />
      </TouchableOpacity>
    </Link>
    <Text style={styles.botaoText}>{label}</Text>
  </View>
);

export default function App() {
  const [hideBalance, setHideBalance] = useState(false);

  const toggleBalance = () => {
    setHideBalance(!hideBalance);
  };

  const buttons = [
    { icon: require('../assets/img/pix.png'), label: 'Pix', screen: '/pix' },
    { icon: require('../assets/img/pagar.png'), label: 'Pagar', screen: '/pagar' },
    { icon: require('../assets/img/transferir.png'), label: 'Transferir', screen: '/transferir' },
    { icon: require('../assets/img/depositar.png'), label: 'Depositar', screen: '/depositar' },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header hideBalance={hideBalance} toggleBalance={toggleBalance} />

      <ScrollView style={styles.content}>
        {/* Saldo disponível com toggle */}
        <View style={styles.saldoContainer}>
          <Text style={styles.saldoTitle}>Saldo disponível</Text>
          {hideBalance ? (
            <View style={styles.hiddenBalance}>
              <Text style={styles.hiddenBalanceText}>•••••</Text>
            </View>
          ) : (
            <Text style={styles.saldoAmount}>R$ 5.301,90</Text>
          )}
        </View>

        {/* Botões principais - Estilo Nubank */}
        <View style={styles.botoesContainer}>
          {buttons.map((button, index) => (
            <ActionButton
              key={index}
              icon={button.icon}
              label={button.label}
              screen={button.screen}
            />
          ))}
        </View>

        {/* Cards */}
        <Card title="Cashback e Benefícios" amount="R$ 83,27" />
        <Card title="Meus cartões" details="Gerencie seus cartões" />
        <Card title="Central de Proteção" details="Seus benefícios" />
      </ScrollView>
    </View>
  );
}

// Componente Card (mantido)
const Card = ({ title, amount, details }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{title}</Text>
    {amount && <Text style={styles.cardAmount}>{amount}</Text>}
    {details && <Text style={styles.cardDetails}>{details}</Text>}
  </View>
);

// Estilos COMPLETOS e atualizados
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  cabecalho: {
    backgroundColor: '#820AD1',
    width: '100%',
    height: 140,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  icone: {
    width: 24,
    height: 24,
    tintColor: 'white',
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
    gap: 20,
    alignItems: 'center',
  },
  boxTextUsuario: {
    marginTop: 15,
  },
  textUsuario: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textBeneficios: {
    color: 'rgba(255,255,255,0.8)',
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
  hiddenBalance: {
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 5,
    alignSelf: 'flex-start'
  },
  hiddenBalanceText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333'
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    paddingHorizontal: 10,
  },
  botaoItem: {
    alignItems: 'center',
    width: 70,
  },
  botaoCirculo: {
    backgroundColor: '#fff',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#F0F0F0'
  },
  botaoIcone: {
    width: 30,
    height: 30,
    tintColor: '#820AD1',
  },
  botaoText: {
    fontSize: 12,
    color: '#490C74',
    marginTop: 5,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#F5F5F5'
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