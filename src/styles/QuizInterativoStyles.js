import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5', // Modo claro
  },
  darkContainer: {
    backgroundColor: '#333', // Modo escuro
  },
  questionImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  question: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000', // Modo claro
  },
  darkText: {
    color: '#fff', // Modo escuro
  },
  buttonContainer: {
    marginTop: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
  },
  darkButton: {
    backgroundColor: '#444', // Modo escuro
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  darkButtonText: {
    color: '#ddd', // Texto no botão no modo escuro
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  darkModalContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Modal escuro
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: 300,
    alignItems: 'center',
  },
  darkModalContent: {
    backgroundColor: '#333', // Fundo do modal no modo escuro
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#000', // Texto no modal no modo claro
  },
  darkModalText: {
    color: '#fff', // Texto no modal no modo escuro
  },
});

export default styles;
