import { TextInput, StyleSheet, ScrollView, View } from "react-native";
import Colors from "../../constants/colors";

function InputScore({score = '', inputHandler, index}) {

    return (<View style={styles.container}>
            <TextInput
                style={styles.numberInput}
                maxLength={3}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                value={score.toString()}
                onChangeText={(t) => inputHandler(t, index)}
            />
        </View>);
}

export default InputScore;


const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.colorA,
        opacity: 0.8,
        width: 65,
        borderRadius: 8,
        marginBottom: 10,
        marginLeft: 10,
        overflow: 'hidden',
    },
    numberInput: {
        fontWeight: 'bold',
        textAlign: 'center',
        verticalAlign: 'middle',
        fontSize: 30,
        color: Colors.textLight,
        height: 80,
      },
    });
