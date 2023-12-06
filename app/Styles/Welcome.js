import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
      },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: 250,
      height: 250,
      resizeMode: 'contain',
    },
    buttonsContainer:{
      flex: 1,
      width: '80%',
      marginBottom: '30%', /* A tester sur plusieurs écrans*/
      justifyContent: 'center',
    },
    connexionButton: {
      backgroundColor: '#0f387a',
      paddingVertical: 15,
      alignItems: 'center',
      borderRadius: 5,
    },
    connexionText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    accessButton: {
      backgroundColor: 'transparent',
      paddingVertical: 15,
      alignItems: 'center',
      borderRadius: 5,
      borderColor: '#0f387a',
    },
    accessText: {
      color: '#0f387a',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
