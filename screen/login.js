import * as React from 'react';
import { View, Text, Button,StyleSheet,ImageBackground,TouchableOpacity,Dimensions,TextInput } from 'react-native';
function LoginScreen({navigation}) {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/backno.jpg')} style={{width: '100%', height: '100%'}}>
            <View style={styles.subcontainer}>
                <Text style={{ marginTop:20, fontWeight:"bold", fontSize:18}}>Usuario: </Text>
                <TextInput placeholderTextColor="#000000" placeholder="Usuario" style={styles.textInput}></TextInput>
                <Text style={{ marginTop:20, fontWeight:"bold", fontSize:18}}>Contraseña: </Text>
                <TextInput placeholderTextColor="#000000" placeholder="Contraseña" style={styles.textInput}></TextInput>
            </View>
            <TouchableOpacity 
              style={{ 
                backgroundColor:'#227CBB',
                width:350,
                height:50,
                borderColor:'blue',
                borderRadius:30,
                marginTop:160,
                justifyContent: 'center', 
                alignItems:'center',
                marginLeft:65
                
              }}
              onPress={() => navigation.navigate('Details')}
              > 
                <Text style={{color:'#ffffff'}}>Ingresar</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center' 
    },
    subcontainer:{
      width:Dimensions.get('window').width*.7,
      height:Dimensions.get('window').height*.3,
      alignItems: 'center',
      backgroundColor:'white',
      marginLeft:Dimensions.get('window').width*.107,
      marginTop:Dimensions.get('window').height*.3,
      borderRadius:20
    },
    textInput:{
      borderWidth:1,
    width:200,
    height:50,
    color:'#000000',
    borderRadius:20,
    paddingLeft:10,
    paddingRight:5,
    marginTop:15,
    marginBottom:10,
    backgroundColor:'#ffffff',
    opacity:.5,
    }
  });
  export default LoginScreen;
