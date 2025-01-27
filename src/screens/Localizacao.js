import { useEffect, useState } from 'react';
import { View, Text, Button, Linking, Platform, Image } from 'react-native';
import * as Location from 'expo-location';
import styles from '../styles/LocalizacaoStyles';
import { useTheme } from '../ThemeContext';

const Localizacao = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const { isDarkMode } = useTheme();

  // Função para obter a localização atual
  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permissão de localização foi negada.');
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);
    };

    getLocation();
  }, []);

  // Função para abrir o Google Maps API com as coordenadas
  const openGoogleMaps = () => {
    if (location) {
      const url = `https://www.google.com/maps?q=${location.latitude},${location.longitude}`;
      Linking.openURL(url);
    }
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.title, isDarkMode && styles.darkTitle]}>
        Sua Localização Atual
      </Text>

      {errorMsg ? (
        <Text style={[styles.error, isDarkMode && styles.darkError]}>
          {errorMsg}
        </Text>
      ) : location ? (
        <>
          {Platform.OS === 'web' ? (
            <iframe
              title="Mapa"
              style={styles.map}
              frameBorder="0"
              src={`https://www.google.com/maps?q=${location.latitude},${location.longitude}&z=15&output=embed`}
              width="100%"
              height="400"
            />
          ) : (
            <>
              <Image
                source={{
                  uri: 'https://media.istockphoto.com/id/1308342065/pt/vetorial/folded-location-map-with-marker-city-map-with-pin-pointer-gps-navigation-map-with-city.jpg?s=612x612&w=0&k=20&c=h_2QJdDYDTplvpMoglZGDsvbynq3i62SzR3-1VfgLZw=',
                }}
                style={styles.image}
              />
              <Text
                style={[
                  styles.coordinates,
                  isDarkMode && styles.darkCoordinates,
                ]}>
                Latitude: {location.latitude}, Longitude: {location.longitude}
              </Text>
              <Button title="Abrir no Google Maps" onPress={openGoogleMaps} />
            </>
          )}
        </>
      ) : (
        <Text style={[styles.loading, isDarkMode && styles.darkLoading]}>
          Obtendo localização...
        </Text>
      )}
    </View>
  );
};

export default Localizacao;
