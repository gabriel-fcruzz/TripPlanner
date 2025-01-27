import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f4f4f4',  // Modo claro
  },
  darkContainer: {
    backgroundColor: '#333',  // Modo escuro
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#f4f4f4',  // Modo claro
  },
  darkScrollView: {
    backgroundColor: '#222',  // Modo escuro
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',  // Modo claro
  },
  darkText: {
    color: '#fff',  // Modo escuro
  },
  mainImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',  // Modo claro
  },
  darkDescription: {
    color: '#ddd',  // Modo escuro
  },
  featureContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  darkFeatureContainer: {
    marginBottom: 30,
    alignItems: 'center',
    backgroundColor: '#333',  // Modo escuro
    borderRadius: 10,
  },
  featureImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#87CEFA',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 10,
  },
  darkButton: {
    backgroundColor: '#555',  // Modo escuro
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  featureText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#333',  // Modo claro
  },
  darkFeatureText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#ddd',  // Modo escuro
  },
});

export default styles;
