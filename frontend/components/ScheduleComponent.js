import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
  Picker,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';
import Constants from 'expo-constants';
import AppLoading from 'expo-app-loading';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FeatherIcons from 'react-native-vector-icons/Feather';
import {
  useFonts,
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from '@expo-google-fonts/nunito';

import { Card } from 'react-native-paper';

import Picture from '../assets/barbeariaLemes2.png';

const { width } = Dimensions.get('window');

const ScheduleComponent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFF" />
      <View style={styles.topContainer}>
        <View style={styles.topBar}>
          <FeatherIcons name="arrow-left" size={30} color="#15B6D6" />
          <Text style={styles.confirmText}>Agendamento</Text>
          <FeatherIcons name="x" size={30} color="#15B6D6" />
        </View>
      </View>

      <View style={styles.mainContainer}>
        <View style={styles.card}>
          <View style={styles.imageCapture}>
            <Image source={Picture} />
          </View>
          <View style={{ paddingLeft: 10 }}>
            <Text
              style={{
                color: '#8FA7B2',
                fontSize: 13,
                fontFamily: 'Nunito_700Bold',
              }}>
              Barbearia Lemes
            </Text>
            <Text
              style={{
                color: '#8FA7B2',
                fontSize: 13,
                fontFamily: 'Nunito_700Bold',
              }}>
              Endereço: Rua Fagundes
            </Text>
            <Text
              style={{
                color: '#8FA7B2',
                fontSize: 13,
                fontFamily: 'Nunito_700Bold',
              }}>
              Número: 56
            </Text>
            <Text
              style={{
                color: '#8FA7B2',
                fontSize: 13,
                fontFamily: 'Nunito_700Bold',
              }}>
              Horário de Atendimento:
            </Text>
            <Text
              style={{
                color: '#8FA7B2',
                fontSize: 13,
                fontFamily: 'Nunito_700Bold',
              }}>
              08h - 19h
            </Text>
          </View>
        </View>
        <View style={styles.buttonContact}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Confirma')}> 
            <FontAwesome name="whatsapp" color="#FFF" size={25} />
            <Text
              style={{
                fontSize: 16,
                color: '#FFF',
                marginLeft: 10,
                fontFamily: 'Nunito_800ExtraBold',
              }}>
              Entre em contato
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.horizontalLine}></View>

        <View style={styles.scheduleContainer}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Nunito_700Bold',
              color: '#8FA7B2',
              marginTop: 15,
            }}>
            Data e Horario
          </Text>

          <View style={styles.schedulePicker}>
            <View style={styles.month}>
              <Picker style={styles.pickerStyle} mode="dropdown">
                <Picker.Item label="Janeiro" value="january" />
                <Picker.Item label="Fevereiro" value="february" />
                <Picker.Item label="Marco" value="march" />
                <Picker.Item label="Abril" value="april" />
                <Picker.Item label="Maio" value="may" />
                <Picker.Item label="Junho" value="june" />
                <Picker.Item label="Julho" value="july" />
                <Picker.Item label="Agosto" value="august" />
                <Picker.Item label="Setembro" value="september" />
                <Picker.Item label="Outubro" value="october" />
                <Picker.Item label="Novembro" value="november" />
                <Picker.Item label="Dezembro" value="december" />
              </Picker>
            </View>
            <View style={styles.date}>
              <TextInput
                placeholder="25/05/2022"
                placeholderTextColor="#rgba(51, 51, 51, 0.35)"
                style={{
                  fontFamily: 'Nunito_700Bold',
                  color: '#777',
                  backgroundColor: '#FFF',
                  borderRadius: 10,
                  border: '1px solid #CCCCCC',
                  padding: 10,
                  marginTop: 10,
                  fontSize: 16,
                  outline: 0,
                }}
              />
            </View>
          </View>

          <View style={styles.finalSetUp}>
            <View style={styles.time}>
              <Picker style={styles.pickerTime} mode="dropdown">
                <Picker.Item label="08:00" value="08h" />
                <Picker.Item label="09:00" value="09h" />
                <Picker.Item label="10:00" value="10h" />
                <Picker.Item label="11:00" value="11h" />
                <Picker.Item label="12:00" value="12h" />
                <Picker.Item label="13:00" value="13h" />
                <Picker.Item label="14:00" value="14h" />
                <Picker.Item label="15:00" value="15h" />
              </Picker>
            </View>
            <TouchableOpacity
              style={styles.concludeButton}
              onPress={() => navigation.navigate('Confirma')}>
              <Text>Agendar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#F2F3F5',
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

  mainContainer: {
    flex: 1,
    alignItems: 'center',
    width: 300,
    margin: 'auto',
    marginTop: 25,
  },

  confirmText: {
    fontSize: 16,
    color: '#AEB1B5',
    fontFamily: 'Nunito_600SemiBold',
  },

  card: {
    width: '100%',
    padding: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  date: {
    marginTop: -40,
  },

  imageCapture: {
    borderRightColor: '#D3E2E5',
    borderRightWidth: 1,
    paddingRight: 10,
  },

  buttonContact: {
    backgroundColor: '#FFF',
    width: '100%',

    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingBottom: 15,
    borderTopColor: '#D3E2E5',
    borderTopWidth: 1,
    paddingTop: 15,
  },

  button: {
    backgroundColor: '#3CDC8C',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 20,
    width: '85%',
    marginTop: -20,
  },

  horizontalLine: {
    height: 1,
    width: '100%',
    backgroundColor: '#D3E2E5',
    marginTop: 20,
  },

  scheduleContainer: {
    width: '100%',
  },

  pickerStyle: {
    borderRadius: 10,
    border: '1px solid rgba(28, 136, 215, 1)',
    padding: 10,
    marginTop: -65,
    color: 'rgba(28, 136, 215, 1)',
    cursor: 'pointer',
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 18,
  },

  pickerTime: {
    borderRadius: 10,
    border: '1px solid rgba(28, 136, 215, 1)',
    padding: 10,
    marginTop: -70,
    color: 'rgba(28, 136, 215, 1)',
    cursor: 'pointer',
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 16,
  },

  concludeButton: {
    backgroundColor: '#15B6D6',
    borderRadius: 10,
    color: '#FFF',
    fontFamily: 'Nunito_600SemiBold',
    padding: 15,
    marginTop: -30,
    width: '100%',
    textAlign: 'center',
    fontSize: 18,
  },
});
export default ScheduleComponent;
