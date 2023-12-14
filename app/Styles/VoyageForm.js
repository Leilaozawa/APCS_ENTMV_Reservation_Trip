import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    scrollContainer: {
      flex: 1,
      marginTop: 25,
    },
    headerContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      textAlign: 'center',
    },
    trajectoireContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 50,
      backgroundColor: '#F2F2F2',
      borderRadius: 20,
      marginTop: 20,
      overflow: 'hidden', // To hide the overflow when the selected button moves
    },
    trajectoireButtons: {
      flex: 1,
      paddingVertical: 20,
      alignItems: 'center',
    },
    selectedButton: {
      backgroundColor: '#FF9100',
    },
    buttonText: {
      color: '#fff', 
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 10,
    },
    formContainer: {
      marginTop: 30,
      paddingHorizontal: 20,
    },
    submitButtonContainer: {
      alignItems: 'flex-end', // Align to the right
      marginTop: 10, 
    },
    submitButton: {
      backgroundColor: '#0f387a',
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 15,
    },
    textSubmitButton: {
      color: '#fff',
      fontSize: 14,
      fontWeight: 'bold',
    },
    inputText: {
      borderWidth: 1,
      borderColor: '#0f387a',
      borderRadius: 5,
      marginTop: 10,
      marginBottom: 10,
    },
    allerRetourView:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%'
    },
    elementAllerRetourView:{
      width: "47%"
    },
    inputNoSelect: {
      borderWidth: 1,
      borderRadius: 4,
      borderColor: '#0f387a',
      height: 50,
      paddingLeft: 15,
      justifyContent: 'center',
      marginBottom: 10,
      fontSize: 16,
    },
    inputNoSelectText:{
      color: '#C5C5C5',
      fontSize: 16,
    },
    hiddenPassagerContainer: {
      borderWidth: 1,
      borderRadius: 4,
      borderColor: '#FF9100',
      paddingLeft: 8,
      fontSize: 18,
      justifyContent: 'center',
      marginBottom: 10,
    },
    passagerLine:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 5,
      marginHorizontal: 10
    },
    passagerInfo:{
      flexDirection: 'row',
      alignItems: 'center',
    },
    passagerText:{
      marginLeft: 15,
    },
    typePassager:{
      fontSize: 16,
      fontWeight: 'bold'
    },
    detailsTypePassager:{
  
    },
    pickerTest:{
      width: 100,
      borderWidth: 1,
      borderColor: '#0f387a',
      borderRadius: 5,
      margin: 5,
    },
    
  });