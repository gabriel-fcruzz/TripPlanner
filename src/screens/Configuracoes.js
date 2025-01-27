import React, { useState } from 'react';
import { View, Text, Switch, Button, TextInput } from 'react-native';
import { useTheme } from '../ThemeContext'; // Usando o hook para acessar o tema
import styles from '../styles/ConfiguracoesStyles';

const Configuracoes = ({ navigation }) => {
  const { isDarkMode, toggleDarkMode } = useTheme(); // Obtendo o estado e a função para alternar o modo escuro
  const [emailNotifications, setEmailNotifications] = useState(false); // Estado para email
  const [smsNotifications, setSmsNotifications] = useState(false); // Estado para SMS
  const [email, setEmail] = useState(''); // Estado para armazenar o email
  const [sms, setSms] = useState(''); // Estado para armazenar o sms

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={isDarkMode ? styles.darkTitle : styles.title}>Configurações</Text>

      <View style={styles.settingRow}>
        <Text style={isDarkMode ? styles.darkSettingText : styles.settingText}>Modo Escuro</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}  // Alternando o estado global
        />
      </View>

      <View style={styles.settingRow}>
        <Text style={isDarkMode ? styles.darkSettingText : styles.settingText}>Notificações por Email</Text>
        <Switch
          value={emailNotifications}
          onValueChange={setEmailNotifications} // Atualizando o estado de notificações por email
        />
      </View>

      <View style={styles.settingRow}>
        <Text style={isDarkMode ? styles.darkSettingText : styles.settingText}>Notificações por SMS</Text>
        <Switch
          value={smsNotifications}
          onValueChange={setSmsNotifications} // Atualizando o estado de notificações por SMS
        />
      </View>

      {emailNotifications && (
        <View style={styles.inputRow}>
          <Text style={isDarkMode ? styles.darkSettingText : styles.settingText}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}  // Atualizando o estado do email
            placeholder="Digite seu email"
            keyboardType="email-address"
          />
        </View>
      )}

      {smsNotifications && (
        <View style={styles.inputRow}>
          <Text style={isDarkMode ? styles.darkSettingText : styles.settingText}>SMS</Text>
          <TextInput
            style={styles.input}
            value={sms}
            onChangeText={setSms}  // Atualizando o estado do sms
            placeholder="Digite seu Número"
            keyboardType="default"
          />
        </View>
      )}

      <Button
        title="Voltar para Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default Configuracoes;
