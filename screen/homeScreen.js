import { useState } from "react";
import { ImageBackground, SafeAreaView, Text, StyleSheet, Alert, KeyboardAvoidingView, ScrollView, View, useWindowDimensions } from "react-native";
import Title from "../components/ui/title";
import { TextInput } from "react-native";
import Colors from "../constants/colors";
import PrimaryButton from '../components/ui/primaryButton'

function HomeScreen({ navigation }) {

    const [enteredNumber, setEnteredNumber] = useState('');

    const { width, height } = useWindowDimensions();

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function onPressScoreHandler() {
      if( enteredNumber > 0 ) {
        navigation.navigate('Score', { playersNumber: enteredNumber });
      } else {
        Alert.alert('Opps!', 'Ingrese un numero mayor a 0', [
          {text: 'OK'},
        ]);
      }
    }
    
    const marginTopDistance = height < 380 ? 20 : 60;
    const marginBottomDistance = height < 380 ? 30 : 'none';

    let content = <>
      <View style={styles.container}>
        <Title>Abyss Score</Title>
        <Text style={[styles.text, {marginTop: marginTopDistance}]}>Numero de Jugadores</Text>
        <TextInput
          style={styles.numberInput}
          maxLength={1}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <PrimaryButton style={styles.marginTop} onPress={onPressScoreHandler}>Iniciar</PrimaryButton>
      </View>
    </>

    if ( height < 600) {

      content = <View style={styles.container}>
                  <View style={styles.viewHorizontal}>
                    
                    <View style={styles.marginHorizontal}>
                      <TextInput
                        style={[styles.numberInput, {marginTop: marginTopDistance}]}
                        maxLength={1}
                        keyboardType="number-pad"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={numberInputHandler}
                        value={enteredNumber}
                        placeholder="#"
                        placeholderTextColor={Colors.textLight}
                      />
                    </View>
                    <View>
                      <Title>Abyss Score</Title>
                      <Text style={[styles.text, {marginTop: marginTopDistance, marginBottom: marginBottomDistance}]}>Numero de Jugadores</Text>
                      <PrimaryButton onPress={onPressScoreHandler}>Iniciar</PrimaryButton>
                    </View>
                  </View>
                </View>

    }


    return (
        <ImageBackground 
          source={require('../assets/images/background.jpg')} 
          resizeMode='cover'
          style={styles.rootScreen}
        >
          <KeyboardAvoidingView style={styles.rootScreen} >
              <ScrollView style={[styles.rootScreen, {marginTop: marginTopDistance}]}>
                {content}
              </ScrollView>
          </KeyboardAvoidingView>
        </ImageBackground>

        );
}

export default HomeScreen;

const styles = StyleSheet.create({
    rootScreen: {
      flex: 1,
    },
    container: {
      flex: 1,
      alignItems: 'center',
    },
    containerHorizontal: {
      flex: 2,
      alignItems: 'center',
      alignContent: "center",      
    },
    text: {
      color: Colors.textLight,
      fontSize: 28,
      textAlign: 'center', 
    },
    numberInput: {
      width: 150,
      fontSize: 100,
      borderBottomColor: Colors.textLight,
      borderBottomWidth: 4,
      color: Colors.textLight,
      marginTop: 40,
      marginBottom: 100,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    viewHorizontal: {
      flexDirection: 'row',
    },
    marginHorizontal: {
      marginRight: 80,
    }
});