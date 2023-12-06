import * as React from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

//styles
import { styles } from '../Styles/InstallationRadioButton'

const InstallationRadioButton = () => {
  const [checked, setChecked] = React.useState('homme');

  return (
    <View style={styles.container}>
      <Text>Homme</Text>
      <RadioButton
        value="homme"
        color='#FE9102'
        status={ checked === 'homme' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('homme')}
      />
      <Text>Femme</Text>
      <RadioButton
        value="femme"
        color='#FE9102'
        status={ checked === 'femme' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('femme')}
      />
    </View>
  );
};

export default InstallationRadioButton;

