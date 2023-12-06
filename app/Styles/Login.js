import { StyleSheet } from "react-native";

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
  formContainer: {
    flex: 1,
    width: '80%',
    justifyContent: 'center',
    marginBottom: '35%', //A verifier
  },
  input: {
    height: 40,
    borderColor: '#808080',
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: '#000',
  },
  loginButton: {
    backgroundColor: '#0f387a',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },
});