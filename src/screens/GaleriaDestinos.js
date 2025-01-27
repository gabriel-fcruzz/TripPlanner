import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, Dimensions, Linking } from "react-native";
import ProgressBar from 'react-native-progress/Bar'; // Importando o componente ProgressBar
import styles from "../styles/GaleriaDestinosStyles";
import { useTheme } from "../ThemeContext";

const { width: screenWidth } = Dimensions.get("window");

const videos = [
  {
    id: "1",
    thumbnail: "https://img.youtube.com/vi/I36YpogbXko/0.jpg",
    url: "https://www.youtube.com/watch?v=I36YpogbXko",
  },
  {
    id: "2",
    thumbnail: "https://img.youtube.com/vi/psGzUM5moyE/0.jpg",
    url: "https://www.youtube.com/watch?v=psGzUM5moyE",
  },
  {
    id: "3",
    thumbnail: "https://img.youtube.com/vi/EOcoUN_KSPM/0.jpg",
    url: "https://www.youtube.com/watch?v=EOcoUN_KSPM",
  },
  {
    id: "4",
    thumbnail: "https://img.youtube.com/vi/OUi4zSHrfR0/0.jpg",
    url: "https://www.youtube.com/watch?v=OUi4zSHrfR0",
  },
  {
    id: "5",
    thumbnail: "https://img.youtube.com/vi/I7Drtc_zZU8/0.jpg",
    url: "https://www.youtube.com/watch?v=I7Drtc_zZU8",
  },
  {
    id: "6",
    thumbnail: "https://img.youtube.com/vi/eceDTUC5wd0/0.jpg",
    url: "https://www.youtube.com/watch?v=eceDTUC5wd0",
  },
];

const GaleriaDestinos = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // Estado de carregamento da página
  const { isDarkMode } = useTheme();

  useEffect(() => {
    // Simulando o carregamento de dados
    const loadData = () => {
      // Simula o carregamento e depois define o estado como falso após 2 segundos
      setTimeout(() => {
        setIsLoading(false);
      }, 2000); // Ajuste o tempo de carregamento conforme necessário
    };

    loadData();
  }, []);

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={[
        styles.videoContainer,
        {
          marginLeft: index === 0 ? 20 : 10,
          marginRight: index === videos.length - 1 ? 20 : 10,
        },
        isDarkMode && styles.darkVideoContainer,
      ]}
      onPress={() => Linking.openURL(item.url)}
    >
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <Text style={[styles.watchText, isDarkMode && styles.darkWatchText]}>
        Assistir no YouTube
      </Text>
    </TouchableOpacity>
  );

  if (isLoading) {
    // Exibir a barra de progresso enquanto a página estiver carregando
    return (
      <View style={styles.loaderContainer}>
        <ProgressBar
          progress={0.5} // Progresso da barra (ajustável)
          width={screenWidth - 60}
          height={5}
          color="#82b1ff"
          borderWidth={0}
        />
      </View>
    );
  }

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.title, isDarkMode && styles.darkTitle]}>Carrossel de Vídeos</Text>
      <FlatList
        data={videos}
        renderItem={renderItem}
        horizontal
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        onScroll={(e) => {
          const offsetX = e.nativeEvent.contentOffset.x;
          const currentIndex = Math.round(offsetX / (screenWidth - 80));
          setActiveIndex(currentIndex);
        }}
        pagingEnabled
        decelerationRate="fast"
        snapToInterval={screenWidth - 60}
        snapToAlignment="center"
      />
    </View>
  );
};

export default GaleriaDestinos;
