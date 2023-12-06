
import React from 'react';
import { Text, View } from 'react-native';

//Styles
import { styles } from '../Styles/ChoixHebergement'
import Line from './Line';

const ChoixHebergement = () => {
    return (
        <View>
            <View style={styles.containerHebergement}>
                <Text style={styles.textChoiceStyle}>Choisissez votre hébérgement</Text>      
            </View>
            <View style={styles.containerTrajet}>
                <Text style={styles.textTrajetStyle}>Trajet Aller</Text>
            </View>
            <Line/>
        </View>
  );
}


export default ChoixHebergement;

