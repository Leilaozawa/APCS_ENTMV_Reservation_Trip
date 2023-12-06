
import React from 'react';
import { Image, View, Text, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

//Style:
import { styles } from '../Styles/Welcome'
import { useRouter } from "expo-router";

const Welcome = () => {
    const router = useRouter();
    return (
        <ImageBackground
            source={require('../Assets/middleOfTheSea.jpg')}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={require('../Assets/logo-entmv.png')} style={styles.logo}/>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.connexionButton} onPress={()=> router.push('/Components/Login')}>
                        <Text style={styles.connexionText}>Se connecter</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.accessButton} onPress={()=> router.push('/Components/Residence')}>
                        <Text style={styles.accessText}>Acceder sans compte</Text>
                    </TouchableOpacity>


                </View>
            </View>
        </ImageBackground>
  );
}


export default Welcome;