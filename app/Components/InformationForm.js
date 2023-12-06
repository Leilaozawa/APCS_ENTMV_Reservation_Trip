
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import InformationFormHeader from './InformationFormHeader';
import { Formik } from 'formik';
import DateComponent from './DateComponent';
import ProgressBarForm from './ProgressBarForm';
import { ScrollView } from 'react-native-gesture-handler';


const InformationForm = () => {
    const testGit=0;
    return (
      <ScrollView>
        <ProgressBarForm/>
        <InformationFormHeader/>

       
          <Formik
            initialValues={{ sexe: '', nom: '', prenom: '', date: '', lieu:'', passeport:'' }}
            onSubmit={values => console.log(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <>
              <View style={styles.container}>
              <View>
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

                <View style={styles.rightContainer}>
                  <Text style={styles.etoile}>* </Text>
                  <Text>Date de naissance</Text>
                </View>
                <DateComponent  placeholder=" " />

                <View style={styles.rightContainer}>
                  <Text style={styles.etoile}>* </Text>
                  <Text>Lieu de naissance</Text>
                </View>
                <TextInput
                  onChangeText={handleChange('lieuNaissance')}
                  onBlur={handleBlur('lieuNaissance')}
                  value={values.lieuNaissance}
                  style={styles.inputText}
                />
                <Text>N° Passport</Text>
                <TextInput
                  onChangeText={handleChange('passeport')}
                  onBlur={handleBlur('passeport')}
                  value={values.passeport}
                  style={styles.inputText}
                />

              </View>
              </View>


              <InformationFormHeader/>
              <View style={styles.containerColumns}>
                <View style={styles.containerColumnsElements}>
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
                </View>
                <View>
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
                </View>
              </View>

              <View style={styles.passagersContainer}>
                  <View>
                    <Text style={styles.passagers}>Coordonées du véhicule</Text>
                  </View>
                  <View style={styles.rightContainer}>
                    <Text style={styles.etoile}>*</Text>
                    <Text>Champs Obligatoire</Text>
                  </View>
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