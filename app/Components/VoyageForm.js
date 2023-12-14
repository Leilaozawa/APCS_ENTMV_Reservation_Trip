import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Modal, Button } from 'react-native';
import { useRouter } from 'expo-router';
import RNPickerSelect from 'react-native-picker-select';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DateComponent from './DateComponent';
import Line from './Line';
import useVoyageStore from '../Store/useVoyageStore';
import useTarifStore from '../Store/useTarifStore';
import useAdulteStore from '../Store/useAdulteStore';
import useDestinationAllerStore from '../Store/useDestinationAllerStore';

//style:
import {styles} from '../Styles/VoyageForm'

const VoyageForm = () => {
  const router = useRouter();
  const { setVoyageInfo } = useVoyageStore();
  const [modalVisible, setModalVisible] = useState(false);

  const { setTarif } = useTarifStore();
  const { setAdulte } = useAdulteStore();
  const { setDestinationAller } = useDestinationAllerStore();

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };


  const [isPassagersVisible, setIsPassagersVisible] = useState(false);
  const [vehiculeVisible, setVehiculeVisible] = useState(false);
  const [isAllerSimple, setIsAllerSimple] = useState(true);
  const [isAllerRetour, setAllerRetour] = useState(false);

  const destinationsAller = [
    { label: 'Alger - Marseille', value: 'alger-marseille' },
    { label: 'Oran - Marseille', value: 'oran-marseille' },
    { label: 'Alger - Alicante', value: 'alger-alicante' },
  ];

  const tarifs = [
    { label: 'Tarif Safir...... en euro', value: 'safir' },
    { label: 'Tarif Plein...... en euro', value: 'plein' },
    { label: 'Tarif Hana...... en euro', value: 'hana' },
    { label: 'Tarif IVA...... en euro', value: 'IVA' },
  ];

  const Passagers = [
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
  ]


  return (
    <View style={styles.container}>
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.headerContainer}>
        <Ionicons name={'boat-sharp'} size={30} color={'#FF9100'} />
        <Text style={styles.headerText}>Voyage</Text>
      </View>
      <Line />

      <View style={styles.trajectoireContainer}>
        <TouchableOpacity
          style={[styles.trajectoireButtons, isAllerSimple && styles.selectedButton]} //conditional styling
          onPress={() => {setIsAllerSimple(true)
            setAllerRetour(false);}
          }
        >
          <Text style={styles.buttonText}>Aller simple</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.trajectoireButtons, !isAllerSimple && styles.selectedButton]}
          onPress={() => {
            setIsAllerSimple(false);
            setAllerRetour(true);
          }}
        >
          <Text style={styles.buttonText}>Aller - Retour</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.formContainer}>

      <View style={styles.inputText}>
        <RNPickerSelect
          placeholder={{ label: 'Choisissez votre voyage', value: null }}
          onValueChange={(value) => setDestinationAller(value)}
          items={destinationsAller}
          style={styles.inputText}
        />
      </View>

      {isAllerSimple &&
        <DateComponent placeholder="Sélectionnez votre date d'aller" />
      }
      {isAllerRetour &&
        <View style={styles.allerRetourView}>
          <View style={styles.elementAllerRetourView}>
          <DateComponent placeholder="Date d'Aller" /></View>
          <View style={styles.elementAllerRetourView}>
          <DateComponent placeholder="Date de retour" /></View>
        </View>
      }

      <View style={styles.inputText}>
        <RNPickerSelect
          placeholder={{ label: 'Séléctionnez votre tarif', value: null }}
          onValueChange={(value) => setTarif(value)}
          items={tarifs}
          style={styles.inputText}
        />
      </View>
      <TouchableOpacity style={styles.inputNoSelect} onPress={()=> setIsPassagersVisible(!isPassagersVisible)}>
        <Text style={styles.inputNoSelectText}>Passagers</Text>
      </TouchableOpacity>

      {isPassagersVisible &&
        <View style={styles.hiddenPassagerContainer}>
          <View style={styles.passagerLine}>
            <View style={styles.passagerInfo}>
            <Image source={require('../Assets/adulte.png')}/>
            <View style={styles.passagerText}>
              <Text style={styles.typePassager}>Adulte</Text>
              <Text style={styles.detailsTypePassager}>Plus de 17 ans </Text>
            </View>
            </View>
            <View style={styles.pickerTest}>
              <RNPickerSelect
                placeholder={{ label: '0', value: null }}
                onValueChange={(value) => setAdulte(value)}
                items={Passagers}
              />
            </View>
          </View>

          <View style={styles.passagerLine}>
            <View style={styles.passagerInfo}>
            <Image source={require('../Assets/jeune.png')}/>
            <View style={styles.passagerText}>
              <Text style={styles.typePassager}>Jeune</Text>
              <Text style={styles.detailsTypePassager}>Entre 12-16 ans</Text>
            </View>
            </View>
            <View style={styles.pickerTest}>
              <RNPickerSelect
                placeholder={{ label: '0', value: null }}
                onValueChange={(value) => console.log(value)}
                items={Passagers}
              />
            </View>
          </View>
          
          <View style={styles.passagerLine}>
            <View style={styles.passagerInfo}>
            <Image source={require('../Assets/enfant.png')}/>
            <View style={styles.passagerText}>
              <Text style={styles.typePassager}>Enfant</Text>
              <Text style={styles.detailsTypePassager}>Entre 3-11 ans</Text>
            </View>
            </View>
            <View style={styles.pickerTest}>
              <RNPickerSelect
                placeholder={{ label: '0', value: null }}
                onValueChange={(value) => console.log(value)}
                items={Passagers}
              />
            </View>
          </View>
          
          <View style={styles.passagerLine}>
            <View style={styles.passagerInfo}>
            <Image source={require('../Assets/bebe.png')}/>
            <View style={styles.passagerText}>
              <Text style={styles.typePassager}>Bébé</Text>
              <Text style={styles.detailsTypePassager}>Entre 0-3 ans</Text>
            </View>
            </View>
            <View style={styles.pickerTest}>
              <RNPickerSelect
                placeholder={{ label: '0', value: null }}
                onValueChange={(value) => console.log(value)}
                items={Passagers}
              />
            </View>
          </View>
          

          
        </View>
      }

      <TouchableOpacity style={styles.inputNoSelect} onPress={()=> setVehiculeVisible(!vehiculeVisible)}>
        <Text style={styles.inputNoSelectText}>Véhicules</Text>
      </TouchableOpacity>

      {vehiculeVisible &&
        <View style={styles.hiddenPassagerContainer}>
          <View style={styles.passagerLine}>
            <View style={styles.passagerInfo}>
            <Image source={require('../Assets/vehicule.png')}/>
            <View style={styles.passagerText}>
              <Text style={styles.typePassager}>Véhicule</Text>
            </View>
            </View>
            <View style={styles.pickerTest}>
              <RNPickerSelect
                placeholder={{ label: '0', value: null }}
                onValueChange={(value) => console.log(value)}
                items={Passagers}
              />
            </View>
          </View>

          <View style={styles.passagerLine}>
            <View style={styles.passagerInfo}>
            <Image source={require('../Assets/remorque.png')}/> 
            <View style={styles.passagerText}>
              <Text style={styles.typePassager}>Remorque</Text>
            </View>
            </View>
            <View style={styles.pickerTest}>
              <RNPickerSelect
                placeholder={{ label: '0', value: null }}
                onValueChange={(value) => console.log(value)}
                items={Passagers}
              />
            </View>
          </View>

          <View style={styles.passagerLine}>
            <View style={styles.passagerInfo}>
            <Image source={require('../Assets/caravane.png')}/>
            <View style={styles.passagerText}>
              <Text style={styles.typePassager}>Caravane</Text>
            </View>
            </View>
            <View style={styles.pickerTest}>
              <RNPickerSelect
                placeholder={{ label: '0', value: null }}
                onValueChange={(value) => console.log(value)}
                items={Passagers}
              />
            </View>
          </View>

          <View style={styles.passagerLine}>
            <View style={styles.passagerInfo}>
            <Image source={require('../Assets/bateau.png')}/>
            <View style={styles.passagerText}>
              <Text style={styles.typePassager}>Bateau</Text>
            </View>
            </View>
            <View style={styles.pickerTest}>
              <RNPickerSelect
                placeholder={{ label: '0', value: null }}
                onValueChange={(value) => console.log(value)}
                items={Passagers}
              />
            </View>
          </View>

          <View style={styles.passagerLine}>
            <View style={styles.passagerInfo}>
            <Image source={require('../Assets/motos.png')}/>
            <View style={styles.passagerText}>
              <Text style={styles.typePassager}>Motos et Quads</Text>
            </View>
            </View>
            <View style={styles.pickerTest}>
              <RNPickerSelect
                placeholder={{ label: '0', value: null }}
                onValueChange={(value) => console.log(value)}
                items={Passagers}
              />
            </View>
          </View>

         
        </View>
      }
        <View style={styles.submitButtonContainer}>
        <TouchableOpacity style={styles.submitButton} onPress={() => {
          router.push('/Components/Home')}}>
          <Text style={styles.textSubmitButton}>Chercher</Text>
        </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
    </View>
  );
};


export default VoyageForm;
