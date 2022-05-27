import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Picker,ScrollView,Dimensions } from 'react-native';
import Constants from 'expo-constants';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FeatherIcons from 'react-native-vector-icons/Feather';

import MaleAvatar from '../assets/male-avatar.png';
import FemaleAvatar from '../assets/female-avatar.png';
import Hair1 from '../assets/hair1.png'
import Hair2 from '../assets/hair2.png'
import Hair3 from '../assets/hair3.png'
import Hair4 from '../assets/hair4.png'

 const { width } = Dimensions.get('window');

const CatalogoComponent=({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.topBar}>
        <FeatherIcons name='arrow-left' size={30} color='#15B6D6'/>
        <Text style={styles.confirmText}>Catálogo de cabelos</Text>
         <FeatherIcons name='x' size={30} color='#15B6D6'/>
        </View>
      </View>

       <View style={styles.landingContainer}>
        <View style={styles.genderContainer}>
        <Text style={styles.firstTopic}>1. Marque seu gênero</Text>

        <View style={styles.genderOption}>
          <View style={styles.maleGender}>
            <View style={styles.turnOn}>
              <View style={styles.circle}></View>
            </View>

            <View style={styles.maleText}>
              <Image source={MaleAvatar} />
              <Text style={styles.male}>Masculino</Text>
            </View>
          </View>
          <View style={styles.femaleGender}>
            <View style={styles.turnOn}>
              <View style={styles.circleOff}></View>
            </View>

            <View style={styles.femaleText}>
            <Image source={FemaleAvatar} />
              <Text style={styles.female}>Feminino</Text>
            </View>
          </View>
        </View>

        <View style={styles.cutSize}>
          <Text style={styles.secondTopic}>2. Tamanho do corte</Text>
            <Picker style={styles.pickerStyle} mode='dropdown'>
              <Picker.Item label="Curto" value="short" />
              <Picker.Item label="Médio" value="medium" />
              <Picker.Item label="Longo" value="long" />
            </Picker>

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
        <View style={styles.hairCatalog}>
          <Text style={styles.thirdTopic}>3. Escolha seu corte</Text>

            <View style={styles.hairRow}>

            <View style={styles.blockHair}>
            <TouchableOpacity onPress={()=> navigation.navigate('Agendamento')}>
              <Image source={Hair1} />
            </TouchableOpacity>
            </View>
            <View style={styles.blockHair}>
            <TouchableOpacity onPress={()=> navigation.navigate('Agendamento')}>
              <Image source={Hair2} />
            </TouchableOpacity>
            </View>

          </View>
          <View style={styles.hairRow}>

            <View style={styles.blockHair}>
            <TouchableOpacity onPress={()=> navigation.navigate('Agendamento')}>
              <Image source={Hair3} />
            </TouchableOpacity>
            </View>
            <View style={styles.blockHair}>
             <TouchableOpacity onPress={()=> navigation.navigate('Agendamento')}>
              <Image source={Hair4} />
            </TouchableOpacity>
            </View>

          </View>
        </View>
        </ScrollView>
        </View>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#F2F3F5',
  },

  topContainer: {
    marginBottom: 5
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

  confirmText: {
    fontSize: 16,
    fontWeight: 500,
    color: '#AEB1B5',
    fontFamily: 'Nunito_600SemiBold'
  },

  landingContainer: {
    marginHorizontal: 'auto',
    width: 300
  },

  circle: {
    height: 15,
    width: 15,
    backgroundColor: '#3CDC8C',
    borderRadius: 100,
    border: '1px solid #777777',
  },

  circleOff: {
    height: 15,
    width: 15,
    borderRadius: 100,
    border: '1px solid #777777',
  },

  genderOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  maleGender: {
    backgroundColor: '#E6F7FB',
    height: 119,
    width: 134,
    borderRadius: 20,
    padding: 20,
    border: '1px solid #B3DAE2',
  },

  femaleGender: {
    backgroundColor: '#FFF8FA',
    height: 119,
    width: 134,
    borderRadius: 20,
    padding: 20,
    border: '1px solid pink'
  },

  turnOn: {
    alignItems: 'flex-end',
    marginBottom: 5
  },

  male: {
    fontSize: 15,
    color: '#5C8599',
    fontWeight: 500,
    marginTop: 15,
  },

  female: {
    fontSize: 15,
    color: '#FF78A8',
    fontWeight: 500,
    marginTop: 15,
  },
  cutSize:{
    height:200,

  },
  pickerStyle: {
    borderRadius: 40,
    border: '1px solid #CCCCCC',
    padding: 10,
    marginTop: -75,
    color: '#B3DAE2',
    cursor: 'pointer',
    fontFamily: 'Nunito_600SemiBold'
  },

  firstTopic: {
    fontSize: 18,
    color: '#8FA7B2',
    marginBottom: 10,
    fontFamily: 'Nunito_700Bold'
  },

  secondTopic: {
    fontSize: 18,
    color: '#8FA7B2',
    marginBottom: 10,
    marginTop: 15,
    fontFamily: 'Nunito_700Bold'
  },

  thirdTopic: {
    fontSize: 18,
    color: '#8FA7B2',
    marginBottom: 20,
    marginTop: 15,
    fontFamily: 'Nunito_700Bold'
  },

  hairRow: {
    flexDirection: 'row',
    width: 250,
    justifyContent: 'space-between'
  },

  blockHair: {
    backgroundColor: '#FFF',
    padding: 15,
    paddingHorizontal: 20,
    marginBottom: 30,
    borderRadius: 10,
    border: '1.5px solid #CCCCCC',
    cursor: 'pointer'
  },
});

export default CatalogoComponent;
