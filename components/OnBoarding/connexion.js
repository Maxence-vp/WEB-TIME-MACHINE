import * as Location from "expo-location";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from "react-native";
import { useEffect, useState } from "react";

function Connexion({ navigation }) {
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  useEffect(() => {
    console.log("login", login);
  }, [login, email, password]);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../../assets/WTMimg.png')} resizeMode="cover" style={styles.image}>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>WEB</Text>
          <Text style={styles.titleText}>TIME</Text>
          <Text style={styles.titleText}>MACHINE</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputForm}></View>
          <TextInput
            placeholder={"E-mail : martymcfly@gmail.com"}
            style={styles.inputA}
            placeholderTextColor="white"
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            placeholder={"Mot de passe : JenniferJTM"}
            style={styles.inputB}
            placeholderTextColor="white"
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              if (email != null && password != null) {
                setLogin(true);
                navigation.navigate("Acceuil");
              } else {
                Alert.alert("Erreur", "email ou mdp incorrects");
              }
            }}
            style={styles.button}>
            <Text style={styles.textButton}>Valider</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image:{
flex: 1,
  },
textContainer : {
flex: 3,
justifyContent: "center",
alignItems: "center",
flexDirection:"column",
},
titleText : {
  color: "white",
  fontWeight: "bold",
  fontSize: 50,
  textAlign: "center",
  textShadowColor: 'rgba(0, 0, 0, 0.90)',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 10,
},
inputContainer: {
flex : 2,
justifyContent: "center",
},
inputForm: {
flexDirection:"column",
justifyContent:"center",
alignItems:"center", 
},
inputA:{
  borderWidth: 3,
  borderRadius: 10,
  height: 50,
  marginHorizontal: 25,
  borderColor: "white",
  paddingLeft: 10,
  margin:15, 
  backgroundColor: 'rgba(52, 52, 52, 0.8)',
  color :"white", 
},
inputB:{
  borderWidth: 3,
  borderRadius: 10,
  height: 50,
  marginHorizontal: 25,
  borderColor: "white",
  paddingLeft: 10,
  backgroundColor: 'rgba(52, 52, 52, 0.8)',
  color:"white",
},
buttonContainer: {
flex: 3,
justifyContent: "center",
flexDirection:"column",
},
button:{
    display: 'flex',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 60,
    backgroundColor: '#f500b2',
    shadowColor: '#5b0021',
    shadowOpacity: 0.8,
    shadowOffset: { height: 4, width: -2 },
    shadowRadius: 1,
},
textButton: {
  fontSize: 16,
  textTransform: 'uppercase',
  fontWeight:"bold",
  color: '#FFFFFF',
},


});
export default Connexion;
