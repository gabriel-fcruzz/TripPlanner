// LocalizacaoStyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  darkTitle: {
    color: '#fff',
  },
  error: {
    color: 'red',
    fontSize: 16,
    marginBottom: 20,
  },
  darkError: {
    color: '#ff6f6f',
  },
  coordinates: {
    fontSize: 18,
    marginBottom: 20,
    color: '#000',
  },
  darkCoordinates: {
    color: '#ccc',
  },
  map: {
    width: '100%',
    height: '400px',
  },
  loading: {
    fontSize: 18,
    color: '#000',
  },
  darkLoading: {
    color: '#ccc',
  },
});

export default styles;
