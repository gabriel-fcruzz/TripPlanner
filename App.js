import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from './src/ThemeContext';
import Navigation from './Navigation';
import { AuthenticationProvider, useAuth } from './src/AuthenticationContext'; // Importar o contexto
import Authentication from './Authentication'; // Importar a tela de autenticação

export default function App() {
  return (
    <ThemeProvider>
      <AuthenticationProvider>
        <NavigationContainer>
          <AuthFlow />
        </NavigationContainer>
      </AuthenticationProvider>
    </ThemeProvider>
  );
}

// Componente de fluxo de autenticação
const AuthFlow = () => {
  const { isAuthenticated } = useAuth(); // Acessar o estado de autenticação

  // Se o usuário não estiver autenticado, exibe a tela de autenticação
  return isAuthenticated ? <Navigation /> : <Authentication />;
};
