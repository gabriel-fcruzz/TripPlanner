import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',  // Modo claro
  },
  darkContainer: {
    backgroundColor: '#333',  // Modo escuro
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',  // Modo claro
  },
  darkTitle: {
    color: '#fff',  // Modo escuro
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',  // Modo claro
  },
  darkInput: {
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#444',  // Modo escuro
    color: '#fff',  // Cor do texto no modo escuro
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',  // Modo claro
  },
  darkSearchInput: {
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#444',  // Modo escuro
    color: '#fff',  // Cor do texto no modo escuro
  },
  planItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',  // Modo claro
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  darkPlanItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#555',  // Modo escuro
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#444',
  },
  planText: {
    fontSize: 16,
    color: '#333',  // Texto em modo claro
  },
  darkPlanText: {
    fontSize: 16,
    color: '#333',  // Texto em modo escuro
  },
  emptyText: {
    textAlign: 'center',
    color: '#888',
    marginTop: 20,
  },
  darkEmptyText: {
    textAlign: 'center',
    color: '#ccc',  // Texto no modo escuro
    marginTop: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  settingText: {
    fontSize: 18,
    color: '#333',  // Cor do texto no modo claro
  },
  darkSettingText: {
    fontSize: 18,
    color: '#fff',  // Cor do texto no modo escuro
  },
});

export default styles;
