import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

function Player({children}) {
    return  <View style={styles.container}>
                <Text style={styles.playerText}>{children}</Text>
            </View>;
}

export default Player;

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 4,
        borderBottomColor: Colors.textLight,
        padding: 24,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
    },
    playerText:{
        fontSize: 100,
        fontWeight: 'bold',
        color: Colors.textLight,
    }
});
