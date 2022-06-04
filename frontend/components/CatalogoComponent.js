import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Picker
} from 'react-native';
import Constants from 'expo-constants';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FeatherIcons from 'react-native-vector-icons/Feather';
import { RadioButton } from 'react-native-paper';

import MaleAvatar from '../assets/male-avatar.png';
import FemaleAvatar from '../assets/female-avatar.png';
import Hair1 from '../assets/hair1.png';
import Hair2 from '../assets/hair2.png';
import Hair3 from '../assets/hair3.png';
import Hair4 from '../assets/hair4.png';
import FemaleHair1 from '../assets/femaleHair1.jpg';
import FemaleHair2 from '../assets/femaleHair2.jpg';
import FemaleHair3 from '../assets/femaleHair3.jpg';
import FemaleHair4 from '../assets/femaleHair4.jpg';


const CatalogoComponent = ({ navigation }) => {
  const [checked, setChecked] = useState('masculino');

  let [flag, setFlag] = React.useState(true);
  let changeImageMale = () => setFlag((previousState) => !previousState);
  let hairMan = checked ==='masculino' ? Hair1 : FemaleHair1;
  let hairMan2 = checked ==='masculino' ? Hair2 : FemaleHair2;
  let hairMan3 = checked ==='masculino' ? Hair3 : FemaleHair3;
  let hairMan4 = checked ==='masculino' ?Hair4 : FemaleHair4;

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.topBar}>
          <FeatherIcons name="arrow-left" size={30} color="#15B6D6" />
          <Text style={styles.confirmText}>Catálogo de cabelos</Text>
          <FeatherIcons name="x" size={30} color="#15B6D6" />
        </View>
      </View>

      <View style={styles.landingContainer}>
        <View style={styles.genderContainer}>
          <Text style={styles.firstTopic}>1. Marque seu gênero</Text>
          <View style={styles.genderOption}>
            <View style={styles.maleGender}>
              <View style={styles.turnOn}>
                <RadioButton
                  style={styles.circle}
                  value="masculino"
                  color="lightgreen"
                  status={checked === 'masculino' ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked('masculino'); changeImageMale();}}
                />
              </View>

              <View style={styles.maleText}>
                <Image source={MaleAvatar} style={{marginTop:-25}} />
                <Text style={styles.male}>Masculino</Text>
              </View>
            </View>

            <View style={styles.femaleGender}>
              <View style={styles.turnOn}>
                <RadioButton
                  style={styles.circle}
                  value="feminino"
                  color="lightgreen"
                  status={checked === 'feminino' ? 'checked' : 'unchecked'}
                  onPress={() =>{ setChecked('feminino');}}
                />
              </View>

              <View style={styles.femaleText}>
                <Image source={FemaleAvatar} style={{marginTop:-25}} />
                <Text style={styles.female}>Feminino</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.cutSize}>
          <Text style={styles.secondTopic}>2. Tamanho do corte</Text>
          <Picker style={styles.pickerStyle} mode="dropdown">
            <Picker.Item label="Curto" value="short" />
            <Picker.Item label="Médio" value="medium" />
            <Picker.Item label="Longo" value="long" />
          </Picker>
        </View>

      
          <View style={styles.hairCatalog}>
            <Text style={styles.thirdTopic}>3. Escolha seu corte</Text>

            <View style={styles.hairRow}>
              <View style={styles.blockHair}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Agendamento')}>
                  <Image source={hairMan} style={{height:100, width:77}} />
                </TouchableOpacity>
              </View>
              <View style={styles.blockHair}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Agendamento')}>
                  <Image source={hairMan2} style={{height:100, width:81}} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.hairRow}>
              <View style={styles.blockHair}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Agendamento')}>
                  <Image source={hairMan3} style={{height:89, width:67}} />
                </TouchableOpacity>
              </View>
              <View style={styles.blockHair}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Agendamento')}>
                  <Image source={hairMan4} style={{height:100, width:67}} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#F2F3F5',
  },

  topContainer: {
    marginBottom: 5,
  },

  topBar: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    height: 100,
    marginTop: -40,
    justifyContent: 'space-around',
    flexDirection: 'row',
    border: '1px solid #ddd',
  },

  confirmText: {
    fontSize: 16,
    fontWeight: 500,
    color: '#AEB1B5',
    fontFamily: 'Nunito_600SemiBold',
  },

  landingContainer: {
    marginHorizontal: 'auto',
    width: 300,
  },

  circle: {
    height: 15,
    width: 15,
    backgroundColor: '#3CDC8C',
    borderRadius: 100,
    border: '1px solid #777777',
  },


  genderOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  maleGender: {
    backgroundColor: '#FFF8FA',
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
    border: '1px solid pink',
  },

  turnOn: {
    alignItems: 'flex-end',
    marginBottom: 5,
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
  cutSize: {
    height: 200,
  },
  pickerStyle: {
    borderRadius: 40,
    border: '1px solid #CCCCCC',
    padding: 10,
    marginTop: -75,
    color: '#B3DAE2',
    cursor: 'pointer',
    fontFamily: 'Nunito_600SemiBold',
  },

  firstTopic: {
    fontSize: 18,
    color: '#8FA7B2',
    marginBottom: 10,
    fontFamily: 'Nunito_700Bold',
  },

  secondTopic: {
    fontSize: 18,
    color: '#8FA7B2',
    marginBottom: 10,
    marginTop: 15,
    fontFamily: 'Nunito_700Bold',
  },

  thirdTopic: {
    fontSize: 18,
    color: '#8FA7B2',
    marginBottom: 20,
    marginTop: 15,
    fontFamily: 'Nunito_700Bold',
  },

  hairRow: {
    flexDirection: 'row',
    width: 250,
    justifyContent: 'space-between',
  },

  blockHair: {
    backgroundColor: '#FFF',
    padding: 15,
    paddingHorizontal: 20,
    marginBottom: 30,
    borderRadius: 10,
    border: '1.5px solid #CCCCCC',
    cursor: 'pointer',
  },
});

export default CatalogoComponent;
