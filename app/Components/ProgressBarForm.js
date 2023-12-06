import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

//styles
import { styles } from '../Styles/ProgressBarForm'

const ProgressBarForm = () => {
    return (
      <View style={styles.container}>
        <Text>HÉBERGEMENT</Text>
        <Ionicons name="chevron-forward-outline" size={20} color="blue" />
        <Text>INFORMATIONS</Text>
        <Ionicons name="chevron-forward-outline" size={20} color="blue" />
        <Text>PAIEMENT</Text>
      </View>
    
  );
}

export default ProgressBarForm;


