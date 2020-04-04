// In App.js in a new project

import * as React from 'react';
import { View, Text, Button,StyleSheet,ImageBackground,TouchableOpacity, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  DetailsScreen from './screen/details.js';
import LoginScreen from './screen/login.js';
function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
        <ImageBackground source={require('./assets/backno.jpg')} style={{width: '100%', height: '100%'}}>
        <View style={styles.subco}>
            <Text style={styles.text}>
              La Música Se Siente.
            </Text>
        </View>
        <TouchableOpacity 
              style={{ 
                backgroundColor:'#227CBB',
                width:350,
                height:50,
                borderColor:'blue',
                borderRadius:30,
                marginTop:0,
                justifyContent: 'center', 
                alignItems:'center',
                marginLeft:100,
              }}
              onPress={() => navigation.navigate('Login')}
              > 
                <Text style={{color:'#ffffff'}}>LOGIN</Text>
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
  subco:{
    alignContent:"center",
    
  },
  text:{
    fontSize:40,
    fontFamily:"sans-serif",
    color:"#ffffff",
    //borderWidth:1,
    textAlign:"center",
    marginTop:Dimensions.get("window").width*.3,
    textShadowColor:'#000000',
    textShadowOffset:{width: 1, height: 1},
    textShadowRadius:1,

  },
});
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;