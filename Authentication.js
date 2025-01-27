import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import { useAuth } from './src/AuthenticationContext'; // Importar o hook do contexto

const Authentication = () => {
  const { login } = useAuth();  // Acessar a função login do contexto
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const authenticate = async () => {
      try {
        const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();
        if (isBiometricAvailable) {
          const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
          if (savedBiometrics) {
            const biometricAuth = await LocalAuthentication.authenticateAsync({
              promptMessage: 'Confirme sua identidade',
              fallbackLabel: 'Use sua senha',
            });

            if (biometricAuth.success) {
              setIsAuthenticated(true);
              login();  // Atualiza o estado de autenticação no contexto
            }
          } else {
            alert('Nenhuma biometria registrada. Configure-a nas configurações do dispositivo.');
          }
        } else {
          alert('Dispositivo sem suporte para biometria.');
        }
      } catch (error) {
        console.error('Erro na autenticação biométrica:', error);
      } finally {
        setIsLoading(false);
      }
    };

    authenticate();
  }, [login]);  // Adicionar login como dependência

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#87CEFA" />
        <Text>Verificando sua identidade...</Text>
      </View>
    );
  }

  if (!isAuthenticated) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Acesso negado. Não foi possível verificar sua identidade.</Text>
      </View>
    );
  }

  // Se autenticado, você pode redirecionar ou exibir conteúdo
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Autenticação bem-sucedida!</Text>
    </View>
  );
};

export default Authentication;
