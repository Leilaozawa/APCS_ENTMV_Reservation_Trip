// Import InstallationCard component
import { ScrollView } from 'react-native-gesture-handler';
import InstallationCard from './InstallationCard';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

//style
import { styles } from '../Styles/Installation'


const Installation = () => {
  const router = useRouter();  
  return (
    <ScrollView>
      <InstallationCard iconColor="#81BB00" iconName="sofa" type="Fauteuil" dispo="Dispo159" price="159,00" />

      <InstallationCard iconColor="#FF0000" iconName="bed" type="Bed" dispo="Dispo99" price="99,00" />

      <InstallationCard iconColor="#FE9102" iconName="bed" type="Bed" dispo="Dispo99" price="92,50" />

      <InstallationCard iconColor="#FF0000" iconName="bed" type="Bed" dispo="Dispo99" price="99,00" />

      <InstallationCard iconColor="#81BB00" iconName="sofa" type="Fauteuil" dispo="Dispo159" price="159,00" />

      <View style={styles.container}>
        <TouchableOpacity style={styles.leftButton}>
          <Text style={styles.textLeftButton}>Précedent</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rightButton} onPress={()=> router.push('/Components/InformationForm')}>
        <Text style={styles.textRightButton}>Valider votre trajet</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

export default Installation;
   



