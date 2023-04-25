import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ScoreScreen from './screen/scoreScreen';
import HomeScreen from './screen/homeScreen';
import AppLoading from 'expo-app-loading';

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

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerShown: false,
            header: () => null,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Score" component={ScoreScreen}/>
        </Stack.Navigator>
      </NavigationContainer> 
    </>
  );
}

