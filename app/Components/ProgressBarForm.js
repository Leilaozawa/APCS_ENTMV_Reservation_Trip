import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

//styles
import { styles } from '../Styles/ProgressBarForm'

const ProgressBarForm = (props) => {
  const {hebergementColor, informationsColor, paiementColor} = props;
    return (
      <View style={styles.container}>
        <Text style={{color: hebergementColor}}>HÉBERGEMENT</Text>
        <Ionicons name="chevron-forward-outline" size={20} color="blue" />
        <Text style={{color: informationsColor}}>INFORMATIONS</Text>
        <Ionicons name="chevron-forward-outline" size={20} color="blue" />
        <Text style={{color: paiementColor}}>PAIEMENT</Text>
      </View>
    
  );
}

export default ProgressBarForm;


