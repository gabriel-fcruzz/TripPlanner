import { View, Text, TouchableHighlight, Image, ScrollView, Dimensions } from 'react-native';
import { LineChart, PieChart } from 'react-native-chart-kit';
import { useTheme } from '../ThemeContext';  // Supondo que o ThemeContext seja utilizado para controlar o tema
import styles from '../styles/HomeStyles';

const Home = ({ navigation }) => {
  const { isDarkMode } = useTheme(); // Obtendo o estado do modo escuro

  // Dados para o gráfico de linha
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        strokeWidth: 2, // Largura da linha
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
      },
    ],
  };

  // Dados para o gráfico de pizza
  const pieData = [
    { name: 'Praia', population: 35, color: '#f00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Montanha', population: 25, color: '#0f0', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Cidade', population: 20, color: '#00f', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Campo', population: 20, color: '#ff0', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  ];


  return (
    <ScrollView style={isDarkMode ? styles.darkScrollView : styles.scrollView}>
      <View style={[styles.container, isDarkMode && styles.darkContainer]}>
        <Text style={[styles.text, isDarkMode && styles.darkText]}>Bem-vindo ao TripPlanner!</Text>
        
        {/* Imagem principal */}
        <Image
          source={{ uri: 'https://media.istockphoto.com/id/700673058/pt/foto/mother-with-three-kids-splashing-in-sea-waves.jpg?s=612x612&w=0&k=20&c=LcCjXLIhNW2Y4RkDKLLxlTdFBBUJ4anAFJgEnCdWPYw=' }}
          style={styles.mainImage}
        />
        
        {/* Explicação sobre o app */}
        <Text style={[styles.description, isDarkMode && styles.darkDescription]}>
          O TripPlanner é o seu aplicativo ideal para planejar viagens, descobrir novos destinos e organizar seus roteiros. Navegue por diferentes funcionalidades para aproveitar ao máximo sua experiência de viagem.
        </Text>
        
        {/* Botão e imagem para o Quiz Interativo */}
        <View style={[styles.featureContainer, isDarkMode && styles.darkFeatureContainer]}>
          <Image
            source={{ uri: 'https://kanto.legiaodosherois.com.br/w750-h450-k1/wp-content/uploads/2024/08/legiao_PYTARKgMf6vW.jpg.webp' }}
            style={styles.featureImage}
          />
          <TouchableHighlight
            style={isDarkMode ? styles.darkButton : styles.button}
            onPress={() => navigation.navigate('Quiz')}
          >
            <Text style={styles.buttonText}>Quiz Interativo</Text>
          </TouchableHighlight>
          <Text style={[styles.featureText, isDarkMode && styles.darkFeatureText]}>Teste seu conhecimento sobre um mundo com um quiz divertido!</Text>
        </View>
        
        {/* Botão e imagem para Localização */}
        <View style={[styles.featureContainer, isDarkMode && styles.darkFeatureContainer]}>
          <Image
            source={{ uri: 'https://media.istockphoto.com/id/1308342065/pt/vetorial/folded-location-map-with-marker-city-map-with-pin-pointer-gps-navigation-map-with-city.jpg?s=612x612&w=0&k=20&c=h_2QJdDYDTplvpMoglZGDsvbynq3i62SzR3-1VfgLZw=' }}
            style={styles.featureImage}
          />
          <TouchableHighlight
            style={isDarkMode ? styles.darkButton : styles.button}
            onPress={() => navigation.navigate('Localização')}
          >
            <Text style={styles.buttonText}>Localização</Text>
          </TouchableHighlight>
          <Text style={[styles.featureText, isDarkMode && styles.darkFeatureText]}>Veja sua localização atual e explore o mapa.</Text>
        </View>
        
        {/* Botão e imagem para Planejamento */}
        <View style={[styles.featureContainer, isDarkMode && styles.darkFeatureContainer]}>
          <Image
            source={{ uri: 'https://escolaweb.com.br/wp-content/uploads/2024/03/escolaweb-imagem-artigos_Como-ter-um-planejamento-financeiro-eficaz-na-sua-escola-1-1.jpg' }}
            style={styles.featureImage}
          />
          <TouchableHighlight
            style={isDarkMode ? styles.darkButton : styles.button}
            onPress={() => navigation.navigate('Planejamento')}
          >
            <Text style={styles.buttonText}>Planejamento</Text>
          </TouchableHighlight>
          <Text style={[styles.featureText, isDarkMode && styles.darkFeatureText]}>Crie e organize seus roteiros de viagem facilmente.</Text>
        </View>
        
        {/* Botão e imagem para Galeria de Destinos */}
        <View style={[styles.featureContainer, isDarkMode && styles.darkFeatureContainer]}>
          <Image
            source={{ uri: 'https://www.dreambooks.com.br/component/ajax/?p=image&src=%7B%22file%22%3A%22images%2Fcaracteristicas%2Falbuns%2Falbuns-destaques%2Falbum_viagens%2Fmotivos_para_fazer.jpg%22%2C%22thumbnail%22%3A%22%2C%2C%22%7D&hash=f5b197b1' }}
            style={styles.featureImage}
          />
          <TouchableHighlight
            style={isDarkMode ? styles.darkButton : styles.button}
            onPress={() => navigation.navigate('Galeria')}
          >
            <Text style={styles.buttonText}>Galeria de Destinos</Text>
          </TouchableHighlight>
          <Text style={[styles.featureText, isDarkMode && styles.darkFeatureText]}>Explore imagens e vídeos dos destinos mais incríveis!</Text>
        </View>

        {/* Gráfico de linha */}
        <Text style={[styles.text, isDarkMode && styles.darkText]}>Visitas Mensais</Text>
        <LineChart
          data={lineData}
          width={Dimensions.get('window').width - 40} // Largura do gráfico
          height={220} // Altura do gráfico
          chartConfig={{
            backgroundColor: isDarkMode ? '#333' : '#fff',
            backgroundGradientFrom: isDarkMode ? '#444' : '#fff',
            backgroundGradientTo: isDarkMode ? '#666' : '#eee',
            decimalPlaces: 0, // Casas decimais nos valores
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: { borderRadius: 16 },
          }}
          style={{ marginVertical: 20, borderRadius: 16 }}
        />

        {/* Gráfico de pizza */}
        <Text style={[styles.text, isDarkMode && styles.darkText]}>Preferências de Viagem</Text>
        <PieChart
          data={pieData}
          width={Dimensions.get('window').width - 40}
          height={220}
          chartConfig={{
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
      </View>
    </ScrollView>
  );
};

export default Home;
