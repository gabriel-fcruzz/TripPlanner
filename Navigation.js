import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './src/screens/Home';
import QuizInterativo from './src/screens/QuizInterativo';
import Localizacao from './src/screens/Localizacao';
import Planejamento from './src/screens/Planejamento';
import Galeria from './src/screens/GaleriaDestinos';
import Configuracoes from './src/screens/Configuracoes';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Quiz') {
              iconName = focused ? 'game-controller' : 'game-controller-outline';
            } else if (route.name === 'Localização') {
              iconName = focused ? 'location' : 'location-outline';
            } else if (route.name === 'Planejamento') {
              iconName = focused ? 'calendar' : 'calendar-outline';
            } else if (route.name === 'Galeria') {
              iconName = focused ? 'images' : 'images-outline';
            } else if (route.name === 'Configurações') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarLabel: () => null,
          tabBarActiveTintColor: '#1E90FF',
          tabBarInactiveTintColor: '#FFFFFF',
          tabBarStyle: {
            backgroundColor: '#87CEFA',
            borderTopWidth: 0,
          },
          headerStyle: {
            backgroundColor: '#87CEFA',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Quiz" component={QuizInterativo} />
        <Tab.Screen name="Localização" component={Localizacao} />
        <Tab.Screen name="Planejamento" component={Planejamento} />
        <Tab.Screen name="Galeria" component={Galeria} />
        <Tab.Screen name="Configurações" component={Configuracoes} />
      </Tab.Navigator>
  );
};

export default Navigation;
