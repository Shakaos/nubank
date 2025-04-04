import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          headerShown: false 
        }} 
      />
      <Stack.Screen 
        name="pix" 
        options={{ 
          title: 'Área Pix',
          headerStyle: { backgroundColor: '#820AD1' },
          headerTintColor: '#fff',
        }} 
      />
      <Stack.Screen 
        name="pagar" 
        options={{ 
          title: 'Pagar',
          headerStyle: { backgroundColor: '#820AD1' },
          headerTintColor: '#fff',
        }} 
      />
      <Stack.Screen 
        name="transferir" 
        options={{ 
          title: 'Transferir',
          headerStyle: { backgroundColor: '#820AD1' },
          headerTintColor: '#fff',
        }} 
      />
      <Stack.Screen 
        name="depositar" 
        options={{ 
          title: 'Depositar',
          headerStyle: { backgroundColor: '#820AD1' },
          headerTintColor: '#fff',
        }} 
      />
    </Stack>
  );
}