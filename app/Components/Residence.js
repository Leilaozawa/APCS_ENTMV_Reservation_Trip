// Import InstallationCard component
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';

//style



const Residence = () => {
  const router = useRouter();  
  return (
    <ImageBackground style={styles.backgroundImage} source={require('../Assets/people.jpg')}>
      <View style={styles.container}>

        <TouchableOpacity style={styles.buttons} onPress={()=> router.push('/Components/VoyageForm')}>
            <Icon name={'home-city'} size={25} color={'white'} />
            <Text style={styles.textButtons}>Résident en Algérie</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttons} onPress={()=> router.push('/Components/VoyageForm')}>
            <Icon name={'card-account-details'} size={25} color={'white'} />
            <Text style={styles.textButtons}>Non résident</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
};

export default Residence;
   
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
      },
    container: {
        display: "flex",
        flexDirection: "column",
        marginTop: 50,
        marginHorizontal: 60,
        alignContent: "center",
        justifyContent: "center",
    },
    buttons:{
        flexDirection: 'row',
        backgroundColor: '#0f387a',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 30,
    },
    textButtons:{
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 10,
    },
});


