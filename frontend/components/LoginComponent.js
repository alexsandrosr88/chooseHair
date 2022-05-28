import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import logo from '../assets/logo.png'

const LoginComponent = ({ navigation }) => {
    const [isChecked, setChecked] = useState(false);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    function autentica(){
      
      if(email.includes('@gmail.com') && senha!=''){
        alert("Bem-Vindo ao Choose Hair")
        navigation.navigate('Mapa');
      }else{
        alert("Preencha os Dados")
        setEmail('')
        setSenha('')
      }
    }
  return (
    <View style={styles.login_container}>
      <View style={styles.landing_container}>

      <View style={styles.topTab}>
         <Image source={logo} />
         <Text style={{color: '#FFF', 
          textAlign: 'center', 
          marginTop: 20, 
          fontSize: 18,
          fontWeight: 'bold',
          fontfamily: ''}}>O cabelo do seu estilo
          </Text>
      </View>

        <View style={styles.login_credentials}>
          <Text style={styles.login_text}>Login</Text>

          <View style={styles.username_block}>
            <TextInput placeholder='Username' 
            style={styles.username_text}                                
            placeholderTextColor='#C8C8C8' 
            onChangeText={setEmail}
            value={email}
            />
          </View>

          <View style={styles.password_block}> 
            <TextInput 
              placeholder='Password' 
              style={styles.password_text}
              secureTextEntry={true}
              placeholderTextColor='#C8C8C8'
              onChangeText={setSenha}
              value={senha}
              />
          </View>

          <View style={styles.loginButton}>
            <TouchableOpacity style={styles.buttonLogin} onPress={autentica}>
              <Text style={styles.logIn}>Entrar</Text>
            </TouchableOpacity>

            <View style={styles.checkboxContainer}>
            <Checkbox style={styles.checkbox}
            value={isChecked}
          onValueChange={setChecked}/>

              <Text style={styles.remainConected}>Me mantenha conectado(a)</Text>
            </View>
          </View>

          <View style={styles.alternativeLogIn}>
            <View style={styles.firstLine}></View>
            <Text style={{color: 'gray', fontWeight: 500, fontSize: 16}}>or</Text>
             <View style={styles.lastLine}></View>
          </View>

          <View style={styles.facebookLogin}>
            <FontAwesome.Button 
              name="facebook" 
              backgroundColor="#1877F2" 
              style={{justifyContent: 'center', padding: 15}}
              >
                Entre com Facebook
            </FontAwesome.Button>
          </View>

          <View style={styles.bottomTab}>
            <Text style={{color: '#C8C8C8', fontSize: 16}}>Não possui casdastro?</Text>
            <Text style={{color: '#1877F2', fontWeight: 700, fontSize: 16, marginLeft: 5}}>Cadastre-se</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  login_container: {
    justifyContent: 'center',
    backgroundColor: '#F2F3F5',
    flex: 1,
    margin: 0,
  },

  login_credentials: {
    justifyContent: 'flex-start',
    margin: 'auto',
    width: 280
  },

  login_text: {
    fontSize: 32,
    fontWeight: 700,
    marginBottom: 30,
    color: '#15B6D6',
    fontfamily: 'Nunito_600SemiBold'
  },

  username_text: {
    backgroundColor: '#FFF',
    marginBottom: 35,
    padding: 15,
    borderRadius: 50,
    outline: 0
  },

  password_text: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 50,
    outline: 0,
    marginBottom: 35
  },
  
  buttonLogin: {
    padding: 15,
    backgroundColor: '#10C8ED',
    borderRadius: 50,
    textAlign: 'center',
  },

  logIn: {
    fontSize: 17,
    fontWeight: 500,
    color: '#FFF'
  },

  facebookLogin: {
    marginTop: 40,
  },

  bottomTab: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  topTab: {
    backgroundColor: '#1C88D7',
    width: '100%',
    marginTop: -120,
    borderRadius: 10
  },

  checkboxContainer: {
    marginTop: 20,
    flexDirection: 'row',
    marginHorizontal: 15
  },

  checkbox: {
    marginRight: 10
  },

  remainConected: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#a9a9a9'
  },

  alternativeLogIn: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  firstLine: {
    backgroundColor: '#C8C8C8',
    height: 1,
    width: 105
  },

  lastLine: {
    backgroundColor: '#C8C8C8',
    height: 1,
    width: 105
  }
});

/*Nunito_200ExtraLight
Nunito_300Light
Nunito_400Regular
Nunito_500Medium
Nunito_600SemiBold
Nunito_700Bold
Nunito_800ExtraBold
Nunito_900Black
Nunito_200ExtraLight_Italic
Nunito_300Light_Italic
Nunito_400Regular_Italic
Nunito_500Medium_Italic
Nunito_600SemiBold_Italic
Nunito_700Bold_Italic
Nunito_800ExtraBold_Italic
Nunito_900Black_Italic*/
export default LoginComponent;
