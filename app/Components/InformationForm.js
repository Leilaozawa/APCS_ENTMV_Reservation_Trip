import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import InformationFormHeader from './InformationFormHeader';
import { Formik } from 'formik';
import DateComponent from './DateComponent';
import ProgressBarForm from './ProgressBarForm';
import { ScrollView } from 'react-native-gesture-handler';


const InformationForm = () => {
    const allerSimple="true"; //Cette variable sera supp par la suite et sera remplacé par le state de isAllerSimple su'on extrait du component VoyageForm
    return (
      <ScrollView>
        
        <ProgressBarForm hebergementColor= 'grey' informationsColor='black' paiementColor='grey'/>

        <InformationFormHeader type="Passager(s)"/>
       
          <Formik
            initialValues={{ sexe: '', nom: '', prenom: '', date: '', lieu:'', passeport:'', email:'', telephone:'' }}
            onSubmit={values => console.log(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              
              <>
              {/*-----------------------------------------Information Passagers---------------------------------------*/}
              <View style={styles.container}>

                <View>
                  {/*-------------------Sexe--------------------*/}
                  <View style={styles.rightContainer}>
                    <Text style={styles.etoile}>* </Text>
                    <Text>Sexe</Text>
                  </View>
                  <TextInput
                    onChangeText={handleChange('sexe')}
                    onBlur={handleBlur('sexe')}
                    value={values.sexe}
                    style={styles.inputText}
                  />

                  {/*-------------------Nom--------------------*/}
                  <View style={styles.rightContainer}>
                    <Text style={styles.etoile}>* </Text>
                    <Text>Nom</Text>
                  </View>
                  <TextInput
                    onChangeText={handleChange('nom')}
                    onBlur={handleBlur('nom')}
                    value={values.nom}
                    style={styles.inputText}
                  />

                  {/*-------------------Prénom--------------------*/}
                  <View style={styles.rightContainer}>
                    <Text style={styles.etoile}>* </Text>
                    <Text>Prénom</Text>
                  </View>
                  <TextInput
                    onChangeText={handleChange('prenom')}
                    onBlur={handleBlur('prenom')}
                    value={values.prenom}
                    style={styles.inputText}
                  />

                  {/*-------------------Dat de naissance--------------------*/}
                  <View style={styles.rightContainer}>
                    <Text style={styles.etoile}>* </Text>
                    <Text>Date de naissance</Text>
                  </View>
                  <DateComponent  placeholder=" " />

                  {/*-------------------Lieu de naissance--------------------*/}
                  <View style={styles.rightContainer}>
                    <Text style={styles.etoile}>* </Text>
                    <Text>Lieu de naissance</Text>
                  </View>
                  <TextInput
                    onChangeText={handleChange('lieu')}
                    onBlur={handleBlur('lieu')}
                    value={values.lieu}
                    style={styles.inputText}
                  /> 

                  {/*-------------------Num passeport--------------------*/}
                  <View style={styles.rightContainer}>
                    <Text style={styles.etoile}>* </Text>
                    <Text>N° Passport</Text>
                  </View>
                  <TextInput
                    onChangeText={handleChange('passeport')}
                    onBlur={handleBlur('passeport')}
                    value={values.passeport}
                    style={styles.inputText}
                  />

                </View>
              </View>


              {/*-----------------------------------------Coordonées réservant---------------------------------------*/}
              <InformationFormHeader type="Coordonnées du réservant"/>

              <View style={styles.containerColumns}>

                {/*-------------------Email--------------------*/}
                <View style={styles.containerColumnsElements}>
                  <View style={styles.rightContainer}>
                    <Text style={styles.etoile}>* </Text>
                    <Text>Email</Text>
                  </View>
                  <TextInput
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    style={styles.inputText}
                  />
                </View>

                {/*-------------------Téléphone--------------------*/}
                <View  style={styles.containerColumnsElements}>
                  <View style={styles.rightContainer}>
                    <Text style={styles.etoile}>* </Text>
                    <Text>Téléphone</Text>
                  </View>
                  <TextInput
                    onChangeText={handleChange('telephone')}
                    onBlur={handleBlur('telephone')}
                    value={values.telephone}
                    style={styles.inputText}
                  />
                </View>
              </View>


              {/*-----------------------------------------Informations Véhicule---------------------------------------*/}
              <InformationFormHeader type="Informations du véhicule"/>

              <View style={styles.containerColumns}>

                {/*-------------------Marque--------------------*/}
                <View style={styles.containerColumnsElements}>
                  <View style={styles.rightContainer}>
                    <Text style={styles.etoile}>* </Text>
                    <Text>Marque</Text>
                  </View>
                  <TextInput
                    onChangeText={handleChange('marque')}
                    onBlur={handleBlur('marque')}
                    value={values.marque}
                    style={styles.inputText}
                  />
                </View>

                {/*-------------------Immatriculation--------------------*/}
                <View  style={styles.containerColumnsElements}>
                  <View style={styles.rightContainer}>
                    <Text style={styles.etoile}>* </Text>
                    <Text>Immatriculation</Text>
                  </View>
                  <TextInput
                    onChangeText={handleChange('immatriculation')}
                    onBlur={handleBlur('immatriculation')}
                    value={values.immatriculation}
                    style={styles.inputText}
                  />
                </View>
                
              </View>

                {/*-------------------VIN--------------------*/}
                <View style={styles.container}>
                    <View style={styles.rightContainer}>
                      <Text style={styles.etoile}>* </Text>
                      <Text>Numéro de châssis (VIN)</Text>
                    </View>
                    <TextInput
                      onChangeText={handleChange('vin')}
                      onBlur={handleBlur('vin')}
                      value={values.vin}
                      style={styles.inputText}
                    />
                </View>    

              <View style={styles.containerColumns}>

                {/*-------------------Conducteur Aller--------------------*/}
                <View style={styles.containerColumnsElements}>
                  <View style={styles.rightContainer}>
                    <Text style={styles.etoile}>* </Text>
                    <Text>Conducteur Aller</Text>
                  </View>
                  <TextInput
                    onChangeText={handleChange('conducteurAller')}
                    onBlur={handleBlur('conducteurAller')}
                    value={values.conducteurAller}
                    style={styles.inputText}
                  />
                </View>

                {/*-------------------Conducteur Retour--------------------*/}
                <View  style={styles.containerColumnsElements}>
                  <View style={styles.rightContainer}>
                    <Text style={styles.etoile}>* </Text>
                    <Text>Conducteur Retour</Text>
                  </View>
                  <TextInput
                    onChangeText={handleChange('ConducteurRetour')}
                    onBlur={handleBlur('ConducteurRetour')}
                    value={values.ConducteurRetour}
                    style={styles.inputText}
                  />
                </View>

              </View>

              {/*-------------------Propriaitaire--------------------*/}
                <View style={styles.container}>
                    <View style={styles.rightContainer}>
                      <Text style={styles.etoile}>* </Text>
                      <Text>Propriétaire</Text>
                    </View>
                    <TextInput
                      onChangeText={handleChange('proprietaire')}
                      onBlur={handleBlur('proprietaire')}
                      value={values.proprietaire}
                      style={styles.inputText}
                    />
                </View>              
              
              <Button onPress={handleSubmit} title="Réserver" />
              </>

            )}
          
        </Formik>

      </ScrollView>
    
  );
}

export default InformationForm;


const styles = StyleSheet.create({
  passagersContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom:20,
    borderRadius: 10,
    height: 'auto', 
    backgroundColor: '#DEEFFF',
    padding: 10,
  },
  container:{
    paddingHorizontal: 20,
  },
  rightContainer:{
    display: 'flex',
    flexDirection: 'row',
  },
  containerColumns:{
    display: 'flex',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  containerColumnsElements:{
    width: '47%',
  },
  etoile:{
    color: 'red',
  },
  passagers:{
    color: '#0f387a',
    fontWeight: 'bold',
  },
  inputText:{
    borderWidth: 1,
    borderColor: '#0f387a',
    borderRadius: 5,
    padding: 5,
    marginTop: 5,
    marginBottom: 15,
  }

});