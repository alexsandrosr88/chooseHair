import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, StatusBar,ScrollView,Dimensions } from 'react-native';
import Constants from 'expo-constants';
import AppLoading from 'expo-app-loading';
import { Searchbar } from 'react-native-paper';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FeatherIcons from 'react-native-vector-icons/Feather';
import MapView from "react-native-maps";

import SnackIcon from '../assets/snack-icon.png'
import MarkerIcon from '../assets/barber-marker.png'

import LemesBarber from '../assets/barbearia-lemes.png'
import LequipBarber from '../assets/lequipe.png'

 const { width } = Dimensions.get('window');

   const MapComponent=({navigation})=>{

  return (
          <View style={styles.container}>
      <StatusBar backgroundColor='#FFF' />
      <View style={styles.topContainer}>
        <View style={styles.topBar}>
        <FeatherIcons name='arrow-left' size={30} color='#15B6D6'/>
        <Text style={styles.confirmText}>Pesquise um Cabeleireiro</Text>
         <FeatherIcons name='x' size={30} color='#15B6D6'/>
        </View>

        <Searchbar
          style={{marginTop: 30, borderRadius: 15, border: '1px solid #CCCCCC'}}
          placeholder="Ex: Barbearia Lemes"
          icon={SnackIcon}
          iconColor='#15B6D6'
          placeholderTextColor='#C4C4C4'
          round
          inputStyle={{outline: 0, color: '#5C8599', fontFamily: 'Nunito_400Regular'}}
        />
      </View>

       <View style={styles.mainContainer}>

        <View style={styles.mapContainer}>
          <View style={styles.mapSketch}>
           <MapView
              initialRegion={{
                latitude: -23.6434719,
                longitude: -46.669152,
                latitudeDelta: 0.008,
                longitudeDelta: 0.008
              }}
              showsPointsOfInterest={false}
              style={{height: 150, width: 320}}
           >

           <MapView.Marker
            coordinate= {{
              latitude: -23.6434719,
              longitude: -46.669152,
            }}
            calloutAnchor={{
              x: 2.9,
              y: 0.8,
            }}
            icon={MarkerIcon}
           ></MapView.Marker>
           </MapView>

           <Text style={{color: '#0089A5', fontSize: 18, fontFamily: 'Nunito_700Bold', textAlign: 'center', paddingTop: 10}}>Consultar rotas no Google Maps</Text>
          </View>
        </View>
<ScrollView 
        ref={(scrollView) => { this.scrollView = scrollView; }}
        style={styles.container}
        //pagingEnabled={true}
        horizontal= {false}
        decelerationRate={0}
        snapToInterval={width - 30}
        snapToAlignment={"center"}
        contentInset={{
          top: 0,
          left: 30,
          bottom: 0,
          right: 30,
        }}>
       <View style={styles.establishment}>
        <Text style={styles.hairDresser}>Cabeleireiros</Text>
        <Text style={styles.seekOut}>Encontre os melhores cabeleireiros de São Paulo</Text>

        <View style={styles.chooseList}>
          <View style={styles.leftOption}>
          <TouchableOpacity onPress={()=> navigation.navigate('Catalogo')}>
           <Image source={LemesBarber} style={{margin: 5}} />
            <Text style={{ color: '#5C8599', fontFamily: 'Nunito_600SemiBold'}}>Barbearia Lemes</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rightOption}>
            <TouchableOpacity onPress={()=> navigation.navigate('Catalogo')}>
           <Image source={LequipBarber} style={{margin: 5}} />
            <Text style={{ color: '#5C8599', fontFamily: 'Nunito_600SemiBold'}}>L’equipe</Text>
            </TouchableOpacity>
          </View>
        </View>
       </View>
       </ScrollView>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#F2F3F5',
  },

  topContainer: {
    flex: 1
  },

  topBar: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    height: 100,
    marginTop:-40,
    justifyContent: 'space-around',
    flexDirection: 'row',
    border: '1px solid #ddd'
  },

  mainContainer:{
    flex: 1,
    marginTop:-400,
    alignItems: 'center'
  },

  confirmText: {
    fontSize: 16,
    color: '#AEB1B5',
    fontFamily: 'Nunito_600SemiBold'
  },

  establishment: {
    marginTop: 20,
    
  },

  hairDresser: {
    fontSize: 20,
    color: '#8FA7B2',
    fontFamily: 'Nunito_700Bold'
  },

  seekOut: {
    fontSize: 15,
    color: '#5C8599',
    fontFamily: 'Nunito_600SemiBold'
  },
  chooseList:{
    flexDirection: 'row',
  }
});
export default MapComponent;
