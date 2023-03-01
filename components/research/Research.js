import { useEffect, useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import * as WebBrowser from 'expo-web-browser';

import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function Research({ navigation }) {

  const [input, setInput] = useState(null);
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [research, setResearch] = useState();
  const [errmsg, setErrmsg] = useState("");
  const [resultResearch, setResultResearch] = useState(null);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    if (Platform.OS === 'android') {
      setShow(false);
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
    setShow(true);
  };

  const getResearch = async () => {

    if (input === "") {
      setErrmsg("Veuillez indiquer un site internet");
    } else if (input.includes(".") == false) {
      setErrmsg("Pensez à noter l'extension de votre site EX: .com")
    } else {
      try {
        const response = await fetch(
          `http://archive.org/wayback/available?url=${input}&timestamp=20060101`,
        );
        const result = await response.json();
        setResearch(result);
      } catch (error) {
        console.error(error);
      }
    }

  };

  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync(research?.archived_snapshots.closest.url);
    console.log(research?.archived_snapshots.closest.url);
    setResultResearch(result);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/WTMimg2.png')} resizeMode="cover" style={styles.image}>

        <View style={styles.step1TitleContainer}>
          <Text style={styles.step1Title}>PRÉPARE TON VOYAGE</Text>
        </View>
        <View>
          <Text style={styles.step1Text}>ETAPE N°=1</Text>
        </View>
        <View style={styles.step1InputContainer}>
          <TextInput style={styles.step1Input}
            placeholder={"Selectionne ton site, ici..."}
            placeholderTextColor="white"
            onChangeText={(text) => setInput(text)}
          />
        </View>

        <View style={styles.step2Container}>
          <View>
            <Text style={styles.step2Text}>ETAPE N=°2</Text>
          </View>
          <View style={styles.step2ButtonContainer}>
            <TouchableOpacity
              style={styles.step2Button}
              onPress={showDatepicker}>
              <View>
                <Text style={styles.step2TextButton}>Selectionne ta date ici</Text>
                <Text style={styles.step2Textselected}>
                  selected: {date.toLocaleString()}</Text>
              </View>
            </TouchableOpacity>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                onChange={onChange}
              />
            )}
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={getResearch}
            style={styles.buttonResearch}>
            <Text style={{ color: "white", fontWeight: "bold" }}>VALIDER</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.researchContainer}>
          <View style={styles.textNameResearchContainer}>
            <Text style={styles.textNameResearch}>Site recherché :{research?.url}</Text>
          </View>
          <View style={styles.urlResearchContainer}>
            <Text style={styles.urlResearch}>Lien du site :{research?.archived_snapshots?.closest?.url}</Text>
          </View>
        </View>
        <View style={styles.researchUrlContainer}>
          <View style={styles.buttonWebContainer}>
            <TouchableOpacity
              style={styles.buttonWeb}
              onPress={_handlePressButtonAsync}>
              <View style={styles.buttonTextWebContainer}>
                <Text style={styles.buttonTextWeb}>LIEN WEB</Text>
                <Text style={styles.buttonTextWebNone}>{resultResearch && JSON.stringify(resultResearch)}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonLinkContainer}>
            <TouchableOpacity
              style={styles.buttonLink}
              onPress={() => {
                navigation.navigate("Résultat de recherche", {
                  urlInsight: research?.archived_snapshots?.closest?.url,
                });
              }}>
              <Text style={styles.textButtonLlink}>APERCU</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  step1TitleContainer: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  step1Title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 50,
    textAlign: "center",
    textShadowColor: 'rgba(0, 0, 0, 0.90)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  step1Text: {
    color: "white",
    fontSize: 25,
    marginLeft: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.90)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  step1InputContainer: {
    flex: 2,
    justifyContent: "center",
  },
  step1Input: {
    borderWidth: 3,
    borderRadius: 10,
    height: 50,
    marginHorizontal: 25,
    borderColor: "white",
    paddingLeft: 10,
    margin: 15,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    color: "white",
  },
  step2Container: {
    flex: 4,
  },
  step2TitleContainer: {
    flex: 2,
  },
  step2Text: {
    color: "white",
    fontSize: 25,
    marginLeft: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.90)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  step2ButtonContainer: {
    flex: 2,
    justifyContent: "center",
  },
  step2Button: {
    display: 'flex',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  step2TextButton:{
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    marginHorizontal: 40,
  },
  researchContainer: {
    flex: 3,
    justifyContent: "center",
  },
  textNameResearchContainer: {
    flex: 2,
    justifyContent: "center",
  },
  urlResearchContainer: {
    flex: 2,
    justifyContent: "center",
  },
  textNameResearch: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 15,
  },
  urlResearch: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 15,
  },
  buttonResearch: {
    display: 'flex',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 100,
    backgroundColor: '#f500b2',
  },
  researchUrlContainer: {
    flex: 3,
    flexDirection: "row",
  },
  buttonWebContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonWeb: {
    display: 'flex',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4dfff5',
    shadowColor: '#5b0021',
  },
  buttonTextWeb: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    marginHorizontal: 40,
  },
  buttonTextWebNone: {
    display: "none",
  },
  buttonLinkContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLink: {
    display: 'flex',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fb6806',
    shadowColor: '#5b0021',
  },
  textButtonLlink: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    marginHorizontal: 40,
  },

});
