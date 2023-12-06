import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import RNPickerSelect from 'react-native-picker-select';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DateComponent from './DateComponent';
import Line from './Line';

const VoyageForm = () => {
  const router = useRouter();

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
    <ScrollView style={styles.container}>
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
          onValueChange={(value) => console.log(value)}
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
          onValueChange={(value) => console.log(value)}
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
                onValueChange={(value) => console.log(value)}
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
        <TouchableOpacity style={styles.submitButton} onPress={() => router.push('/Components/Home')}>
          <Text style={styles.textSubmitButton}>Chercher</Text>
        </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
  },
  trajectoireContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 50,
    backgroundColor: '#F2F2F2',
    borderRadius: 20,
    marginTop: 20,
    overflow: 'hidden', // To hide the overflow when the selected button moves
  },
  trajectoireButtons: {
    flex: 1,
    paddingVertical: 20,
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#FF9100',
  },
  buttonText: {
    color: '#fff', 
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  formContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  submitButtonContainer: {
    alignItems: 'flex-end', // Align to the right
    marginTop: 10, 
  },
  submitButton: {
    backgroundColor: '#0f387a',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  textSubmitButton: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  inputText: {
    borderWidth: 1,
    borderColor: '#0f387a',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  allerRetourView:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  elementAllerRetourView:{
    width: "47%"
  },
  inputNoSelect: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#0f387a',
    height: 50,
    paddingLeft: 15,
    justifyContent: 'center',
    marginBottom: 10,
    fontSize: 16,
  },
  inputNoSelectText:{
    color: '#C5C5C5',
    fontSize: 16,
  },
  hiddenPassagerContainer: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#FF9100',
    paddingLeft: 8,
    fontSize: 18,
    justifyContent: 'center',
    marginBottom: 10,
  },
  passagerLine:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: 10
  },
  passagerInfo:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  passagerText:{
    marginLeft: 15,
  },
  typePassager:{
    fontSize: 16,
    fontWeight: 'bold'
  },
  detailsTypePassager:{

  },
  pickerTest:{
    width: 100,
    borderWidth: 1,
    borderColor: '#0f387a',
    borderRadius: 5,
    margin: 5,
  },


  
});

export default VoyageForm;
