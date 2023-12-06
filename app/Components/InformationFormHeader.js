
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';




const InformationFormHeader = () => {

    return (
      <View>


        <View style={styles.passagersContainer}>
          <View>
            <Text style={styles.passagers}>Passager(s)</Text>
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.etoile}>*</Text>
            <Text>Champs Obligatoire</Text>
          </View>
        </View>


      </View>
    
  );
}

export default InformationFormHeader;

const styles = StyleSheet.create({
  passagersContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom:20,
    marginRight:10,
    marginLeft:10,
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