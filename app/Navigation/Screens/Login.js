
import React from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Formik } from 'formik'
//Styles
import { styles } from '../../Styles/Login'
import { useRouter } from 'expo-router';

const Login = (/*{ navigation: { navigate } }*/) => {
  const router = useRouter();  
  return (
      <ImageBackground
        source={require('../../Assets/middleOfTheSea.jpg')}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          {/* Logo */}
          <View style={styles.logoContainer}>
            <Image source={require('../../Assets/logo-entmv.png')} style={styles.logo} />
          </View>
          
          {/* Form */}
          <View style={styles.formContainer}>
            <Formik
              initialValues={{ email: '', password: '' }}
    onSubmit={(values) => {console.log(values); router.push('/Components/Residence')/*navigate("MainContainer")*/}} //we have to check later the email and password by sending a post request to see if the info are correct : navigate to the maincontainer or if the aren't error
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                  <TextInput
                    style={styles.input}
                    placeholderTextColor="#808080"
                    placeholder='Email'
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                  <TextInput
                    style={styles.input}
                    placeholderTextColor="#808080"
                    placeholder='Mot de passe'
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    secureTextEntry
                  />
                  {/* Login button */}
                  <TouchableOpacity 
                    style={styles.loginButton}
                    onPress={handleSubmit}>
                      <Text style={styles.buttonText}>Connexion</Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
          </View>
        </View>
    </ImageBackground>
  );
}

export default Login;
