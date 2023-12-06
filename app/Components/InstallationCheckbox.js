import * as React from 'react';
import { View, Text } from 'react-native';
import { Checkbox } from 'react-native-paper';

//styles
import { styles } from '../Styles/InstallationCheckbox'

const InstallationCheckBox = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <View style={styles.container}>
        
        <Checkbox
        color='blue'
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
            setChecked(!checked);
        }}
        />
        <Text>Adulte 1: </Text>
    </View>
  );
};

export default InstallationCheckBox;

