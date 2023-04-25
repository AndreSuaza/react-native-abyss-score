import { View, Text, Pressable, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

function PrimaryButton({ children, onPress, marginTop }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed, {marginTop: marginTop}]
            : [styles.buttonInnerContainer, {marginTop: marginTop}]
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 2,
    margin: 4,
  },
  buttonInnerContainer: {
    backgroundColor: Colors.colorB,
    paddingVertical: 8,
    paddingHorizontal: 36,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
  },
  pressed: {
    opacity: 0.75,
  },
});
