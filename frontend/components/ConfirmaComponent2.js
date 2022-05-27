import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FeatherIcons from 'react-native-vector-icons/Feather';


const ConfirmaComponent2=({navigation})=>{
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.topBar}>
        <FeatherIcons name='arrow-left' size={30} color='#15B6D6'/>
        <Text style={styles.confirmText}>Confirmação</Text>
         <FeatherIcons name='x' size={30} color='#15B6D6'/>
        </View>
      </View>

       <View style={styles.mainContainer}>
        <Text style={styles.questionText}>Seu agendamento foi confirmado!</Text>

        <View style={styles.buttonChoice}>
          <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Mapa')}>
          <Text>Ok</Text>
          </TouchableOpacity>
        </View>
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
    marginTop:-250,
    alignItems: 'center'
  },

  buttonChoice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30
  },

  button: {
    backgroundColor: '#15B6D6',
    borderRadius: 50,
    padding: 15,
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
    color: '#FFF',
    width: 132,
    textAlign: 'center',
    fontFamily: 'Nunito_400Regular'
  },

  confirmText: {
    fontSize: 16,
    fontWeight: 500,
    color: '#AEB1B5',
    fontFamily: 'Nunito_600SemiBold'
  },

  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8FA7B2',
    fontFamily: 'Nunito_700Bold'
  }
});
export default ConfirmaComponent2; 
