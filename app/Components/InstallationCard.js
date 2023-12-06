
//Ceci est la carte contenant les information de l'installation: fauteuil, cabine, ...

import React, { useState } from 'react';
import { View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Line from './Line';
import SelectionList from '../Components/SelectionList';
import InstallationRadioButton from './InstallationRadioButton';
import InstallationCheckBox from './InstallationCheckbox';

//styles
import { styles } from '../Styles/InstallationCard'


const Installation = (props) => {
    const { iconColor, iconName, type, dispo, price } = props;
  // State to manage the hide variable (pour le tableau des details Homme, femme, ...)
  const [hide, setHide] = useState(false);

  return (
    <View>
        <View style={styles.containerWithHiddenSection}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                <View style={styles.disponibilite}>
                    <Icon name={'circle'} size={20} color={iconColor} />
                </View>
                <View style={styles.installationImageContainer}>
                    <Icon name={iconName} size={50} color={'#0F387A'} />
                </View>
                <View style={styles.details}>
                    <Text>{type}</Text>
                    <Text>{dispo}</Text>
                    <Text>{price}</Text>
                </View>
                </View>

                <View>
                <SelectionList onSelect={(val) => console.log("Selected value:", val)} setHide={setHide} />
                </View>
            </View>
            {hide && 
                <View style={styles.selectedView}>
                    <InstallationCheckBox/>
                    <InstallationRadioButton/>
                </View>}
        </View>
        <Line />

        
    </View>
  );
};

export default Installation;

   
   
   
   
   
   
   
   
   
   
   
   
   
   /*
   
   //Ceci est la carte contenant les information de l'installation: fauteuil, cabine, ...

import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Line from './Line';
import SelectionList from '../Components/SelectionList';
import InstallationRadioButton from './InstallationRadioButton';
import InstallationCheckBox from './InstallationCheckbox';

//styles
import { styles } from '../Styles/Installation'


const Installation = (props) => {
    const { iconColor, iconName, type, dispo, price } = props;
  // State to manage the hide variable (pour le tableau des details Homme, femme, ...)
  const [hide, setHide] = useState(false);

  return (
    <ScrollView>
        <View style={styles.containerWithHiddenSection}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                <View style={styles.disponibilite}>
                    <Icon name={'circle'} size={20} color={'#81BB00'} />
                </View>
                <View style={styles.installationImageContainer}>
                    <Icon name={'sofa'} size={50} color={'#0F387A'} />
                </View>
                <View style={styles.details}>
                    <Text>Fauteuil</Text>
                    <Text>Dispo159</Text>
                    <Text>159,00 EURO</Text>
                </View>
                </View>

                <View style={styles.counter}>
                <SelectionList onSelect={(val) => console.log("Selected value:", val)} setHide={setHide} />
                </View>
            </View>
            {hide && 
                <View style={styles.selectedView}>
                    <InstallationCheckBox/>
                    <InstallationRadioButton/>
                </View>}
            <Line />
        </View>

        <View style={styles.containerWithHiddenSection}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                <View style={styles.disponibilite}>
                    <Icon name={'circle'} size={20} color={'#81BB00'} />
                </View>
                <View style={styles.installationImageContainer}>
                    <Icon name={'sofa'} size={50} color={'#0F387A'} />
                </View>
                <View style={styles.details}>
                    <Text>Fauteuil</Text>
                    <Text>Dispo159</Text>
                    <Text>159,00 EURO</Text>
                </View>
                </View>

                <View style={styles.counter}>
                <SelectionList onSelect={(val) => console.log("Selected value:", val)} setHide={setHide} />
                </View>
            </View>

            <Line />
        </View>

        <View style={styles.containerWithHiddenSection}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                <View style={styles.disponibilite}>
                    <Icon name={'circle'} size={20} color={'#81BB00'} />
                </View>
                <View style={styles.installationImageContainer}>
                    <Icon name={'sofa'} size={50} color={'#0F387A'} />
                </View>
                <View style={styles.details}>
                    <Text>Fauteuil</Text>
                    <Text>Dispo159</Text>
                    <Text>159,00 EURO</Text>
                </View>
                </View>

                <View style={styles.counter}>
                <SelectionList onSelect={(val) => console.log("Selected value:", val)} setHide={setHide} />
                </View>
            </View>

            <Line />
        </View>

        <View style={styles.containerWithHiddenSection}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                <View style={styles.disponibilite}>
                    <Icon name={'circle'} size={20} color={'#81BB00'} />
                </View>
                <View style={styles.installationImageContainer}>
                    <Icon name={'sofa'} size={50} color={'#0F387A'} />
                </View>
                <View style={styles.details}>
                    <Text>Fauteuil</Text>
                    <Text>Dispo159</Text>
                    <Text>159,00 EURO</Text>
                </View>
                </View>

                <View style={styles.counter}>
                <SelectionList onSelect={(val) => console.log("Selected value:", val)} setHide={setHide} />
                </View>
            </View>

            <Line />
        </View>

        <View style={styles.containerWithHiddenSection}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                <View style={styles.disponibilite}>
                    <Icon name={'circle'} size={20} color={'#81BB00'} />
                </View>
                <View style={styles.installationImageContainer}>
                    <Icon name={'sofa'} size={50} color={'#0F387A'} />
                </View>
                <View style={styles.details}>
                    <Text>Fauteuil</Text>
                    <Text>Dispo159</Text>
                    <Text>159,00 EURO</Text>
                </View>
                </View>

                <View style={styles.counter}>
                <SelectionList onSelect={(val) => console.log("Selected value:", val)} setHide={setHide} />
                </View>
            </View>

            <Line />
        </View>

        <View style={styles.containerWithHiddenSection}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                <View style={styles.disponibilite}>
                    <Icon name={'circle'} size={20} color={'#81BB00'} />
                </View>
                <View style={styles.installationImageContainer}>
                    <Icon name={'sofa'} size={50} color={'#0F387A'} />
                </View>
                <View style={styles.details}>
                    <Text>Fauteuil</Text>
                    <Text>Dispo159</Text>
                    <Text>159,00 EURO</Text>
                </View>
                </View>

                <View style={styles.counter}>
                <SelectionList onSelect={(val) => console.log("Selected value:", val)} setHide={setHide} />
                </View>
            </View>

            <Line />
        </View>
        
    </ScrollView>
  );
};

export default Installation;


   
   */