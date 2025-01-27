import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet, ScrollView } from 'react-native';
import { Camera } from 'expo-camera';
import * as FileSystem from 'expo-file-system';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photo, setPhoto] = useState(null);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (camera) {
      const photoData = await camera.takePictureAsync();
      setPhoto(photoData.uri);
      savePhoto(photoData.uri);
    }
  };

  const savePhoto = async (uri) => {
    try {
      const fileName = uri.split('/').pop();
      const fileUri = FileSystem.documentDirectory + fileName;

      await FileSystem.copyAsync({
        from: uri,
        to: fileUri,
      });

      setPhotos((prevPhotos) => [...prevPhotos, fileUri]);
    } catch (error) {
      console.error('Erro ao salvar foto:', error);
    }
  };

  let camera;
  if (hasPermission === null) {
    return <Text>Carregando permissões...</Text>;
  }

  if (hasPermission === false) {
    return <Text>Permissão para acessar a câmera foi negada.</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Camera style={styles.camera} type={type} ref={(ref) => (camera = ref)}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <Text style={styles.text}>Tirar Foto</Text>
          </TouchableOpacity>
          <Button title="Trocar Câmera" onPress={() => setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back)} />
        </View>
      </Camera>

      {photo && (
        <View style={styles.photoContainer}>
          <Text>Foto Capturada:</Text>
          <Image source={{ uri: photo }} style={styles.photo} />
        </View>
      )}

      {photos.length > 0 && (
        <View style={styles.photosList}>
          <Text>Fotos Salvas:</Text>
          {photos.map((uri, index) => (
            <Image key={index} source={{ uri }} style={styles.savedPhoto} />
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  camera: {
    width: '100%',
    height: 400,
    marginBottom: 20,
    borderRadius: 10,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#1E90FF',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
  photoContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  photo: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginTop: 10,
  },
  photosList: {
    marginVertical: 20,
    width: '100%',
  },
  savedPhoto: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default CameraScreen;
