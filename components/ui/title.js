import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";


function Title({children}) {
    return <Text style={styles.title}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        color: Colors.textLight,
        fontSize: 40,
        textAlign: 'center',
        padding: 12,
        marginTop: 20,
        //fontFamily: 'braah',
    }
});