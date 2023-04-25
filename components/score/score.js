import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
import InputScore from "../ui/inputScore";

function Score() {

    const [scorePLayer, setScorePLayer] = useState([]);
    
    function scoreHandler(enteredText, index) {
        scorePLayer[index] = enteredText === '' || enteredText === '-' ? enteredText : parseInt(enteredText) ;
        setScorePLayer([...scorePLayer]);
    }

    function summation () {
        return scorePLayer.reduce((a, n) => !n ? a+0 : a+n , 0);
    }

    return <View>
            <InputScore score={scorePLayer[0]} inputHandler={scoreHandler} index={0}/>{/* lords */}
            <InputScore score={scorePLayer[1]} inputHandler={scoreHandler} index={1}/>{/* pearls */}
            <InputScore score={scorePLayer[2]} inputHandler={scoreHandler} index={2}/>{/* chains */}
            <InputScore score={scorePLayer[3]} inputHandler={scoreHandler} index={3}/>{/* cards */}
            <InputScore score={scorePLayer[4]} inputHandler={scoreHandler} index={4}/>{/* cards */}
            <Text style={styles.summation}>{summation()}</Text>
        </View>
}

export default Score;

const styles = StyleSheet.create({
    text: {
        color: Colors.colorA,
        fontSize: 30,
    },
    summation: {
        color: Colors.textLight,
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        opacity: 0.8,
        marginBottom: 10,
    }
});


