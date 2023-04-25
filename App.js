import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ScoreScreen from './screen/scoreScreen';
import HomeScreen from './screen/homeScreen';
import AppLoading from 'expo-app-loading';
import { ImageBackground, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {

  // const [fontsLoaded] = useFonts({
  //   'braah' : require('./assets/fonts/BraahOne-Regular.ttf'),
  // });

  // useEffect(() => {
  //   async function prepare() {
  //     await SplashScreen.preventAutoHideAsync();
  //   }
  //   prepare();  
  // }, []); 
  
  // const onLayout = useCallback(
  //   async () => {
  //     if( fontsLoaded ) {
  //       await SplashScreen.hideAsync();
  //     }
  // }, [fontsLoaded]);

  const navTheme = {
    colors: {
      background: 'transparent',
    },
  };

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer theme={navTheme}>
        <ImageBackground
          source={require('./assets/images/background.jpg')} 
          resizeMode='cover'
          style={styles.rootScreen}
        >
        <Stack.Navigator 
          screenOptions={{
            header: () => null,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Score" component={ScoreScreen}/>
        </Stack.Navigator>
        </ImageBackground>
      </NavigationContainer> 
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});