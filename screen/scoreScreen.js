import { View, StyleSheet, ScrollView, Image, ImageBackground, KeyboardAvoidingView, useWindowDimensions } from "react-native";
import Score from "../components/score/score";
import Title from "../components/ui/title";
import PrimaryButton from "../components/ui/primaryButton";



function ScoreScreen({ route, navigation }) {

    const { width, height } = useWindowDimensions();

    var scores = [];

    for(let i = 0; i < route.params.playersNumber; i++){
        scores.push(<Score key={i}/>);
    }

    function onPressHomeHandler() {
        navigation.navigate('Home');
    }

    const viewHorizontal = height < 380 ? false : true;

    return <KeyboardAvoidingView style={styles.rootScreen}>
            
                <ImageBackground 
                    source={require('../assets/images/background.jpg')} 
                    resizeMode='cover'
                    style={styles.rootScreen}
                >
                    {viewHorizontal && <Title>Score</Title> }
                    <ScrollView 
                        style={styles.screen} 
                        horizontal={viewHorizontal} 
                        pagingEnabled 
                        showsHorizontalScrollIndicator={false}
                        alwaysBounceHorizontal={false}
                    >
                    <View style={styles.center}>
                        <View style={styles.container}>
                            <View>
                                <Image
                                    source={require('../assets/images/lords.png')}
                                    style={styles.image}
                                    resizeMode='cover'
                                />
                                <Image
                                    source={require('../assets/images/keys.png')}
                                    style={styles.image}
                                    resizeMode='cover'
                                />
                                <Image
                                    source={require('../assets/images/try.png')}
                                    style={styles.image}
                                    resizeMode='cover'
                                />
                                <Image
                                    source={require('../assets/images/star.png')}
                                    style={styles.image}
                                    resizeMode='cover'
                                />
                                <Image
                                    source={require('../assets/images/monster.png')}
                                    style={styles.image}
                                    resizeMode='cover'
                                />
                            </View>
                            { scores }
                        </View>
                        <PrimaryButton onPress={onPressHomeHandler} marginTop={20}>Nuevo</PrimaryButton>
                    </View>
                    </ScrollView>
                </ImageBackground>
        </KeyboardAvoidingView>
}

export default ScoreScreen;


const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
        backgroundColor: 'black',
    },
    screen: {
        flex: 1,
    },
    center: {
        flex: 1,
        alignItems: 'center',
    },
    container:{
        marginTop: 20,
        flexDirection: 'row',
        overflow: 'hidden',
    },
    image: {
        padding: 30,
        marginTop: 10,
        marginBottom: 20,
        opacity: 0.8,
        marginRight: 10,
    }
});