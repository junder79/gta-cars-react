import React from 'react';
import { View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CustomHeader from './componentes/headerComponente';
import { Container, Text, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

/* Importamos las imagenes */
import { imagenes } from './src/constantes/imagen';
/* Importamos el stack Navigation , para poder realizar la navegacion entre pantallas */
import { createStackNavigator } from 'react-navigation-stack';
import Feed from './componentes/inicioComponente';
import Search from './componentes/notificacionesComponente';
/* Vehiculos Componentes */
import Aviones from './componentes/vehiculosComponente.js/avionesComponente';
import Autos from './componentes/vehiculosComponente.js/autosComponentes';
import Helicoptero from './componentes/vehiculosComponente.js/helicopteroComponente';
import Extrano from './componentes/vehiculosComponente.js/extranosComponentes';
import Motocicletas from './componentes/vehiculosComponente.js/motocicletasComponente'
import Botes from './componentes/vehiculosComponente.js/botesComponentes';
/* Notificaciones Componentes */ 
import FormularioDesarrollador from './componentes/formularios/formDeveloper';
import DetalleVehiculo from './componentes/vehiculosComponente.js/detalleVehiculo';
class FeedDetail extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader titulo="Detalle Categoria" navigation={this.props.navigation} />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Detalle Pantalla</Text>

        </View>
      </View>
    );
  }
}

class SearchDetail extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader titulo="Search Detalle" navigation={this.props.navigation} />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Search Detailt</Text>
          <Button onPress={() => this.props.navigation.navigate('Search')}>
            <Text>Serach detail Detalle</Text>
          </Button>
        </View>
      </View>
    );
  }
}


const navOptionHandler = (navigation) => ({
  header: null
});

/* Packs de Rutas */

const FeedStack = createStackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: navOptionHandler
  },
  FeedDetail: {
    screen: FeedDetail,
    navigationOptions: navOptionHandler
  },
  Aviones: {
    screen: Aviones,
    navigationOptions: navOptionHandler
  },
  Autos: {
    screen: Autos,
    navigationOptions: navOptionHandler
  },
  Helicoptero: {
    screen: Helicoptero,
    navigationOptions: navOptionHandler
  },
  Extrano: {
    screen: Extrano,
    navigationOptions: navOptionHandler

  },
  Motos: {
    screen: Motocicletas,
    navigationOptions: navOptionHandler

  },
  Botes: {
    screen: Botes,
    navigationOptions: navOptionHandler

  },
  DetalleVehiculo: {
    screen: DetalleVehiculo,
    navigationOptions: navOptionHandler
  }

})
// console.log("ES"+FeedStack);
const SearchStack = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: navOptionHandler
  },
  SearchDetail: {
    screen: SearchDetail,
    navigationOptions: navOptionHandler
  },
  FormularioDesarrollador: {
    screen: FormularioDesarrollador,
    navigationOptions: navOptionHandler
  },
})


const TabNavigator = createBottomTabNavigator({
  /* Nombres del tabs (que salen abajo de la app) ,a esas tabs le paso el objeto , de la cual trae las rutas elegidas */
  Vehiculo: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Vehiculo',
      tabBarOptions: {
        activeTintColor: '#000',
        inactiveTintColor: '#90a4ae',
      },
      tabBarIcon: ({ tinColor }) => (
        <Image source={imagenes.ICON_CARS} resizeMode="contain" style={{ width: 55, height: 55 }} ></Image>
      )
    }
  },
  Notificaciones: {
    screen: SearchStack,
    navigationOptions: {
      tabBarLabel: 'Novedades',
      tabBarOptions: {
        activeTintColor: '#000',
        inactiveTintColor: '#90a4ae',
      },
      tabBarIcon: ({ tinColor }) => (
        <Image source={imagenes.ICON_NOTIFICATION} resizeMode="contain" style={{ width: 25, height: 25 }} ></Image>
      )
    }
  },
});

export default createAppContainer(TabNavigator);