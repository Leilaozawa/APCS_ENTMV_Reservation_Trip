
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
      },
      scrollView: {
        flex: 1,
      },
    buttonsContainer:{
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        margin: 20,
    },
    leftButton:{
        backgroundColor: '#0f387a',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    textLeftButton:{
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    rightButton:{
        borderRadius: 5,
        borderColor: '#0f387a',
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    textRightButton:{
        color: '#0f387a',
        fontSize: 14,
        fontWeight: 'bold',
    },

});