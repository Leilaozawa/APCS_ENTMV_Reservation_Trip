import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    /************ Recapitulatif style***********/
  buttonContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  ButtonRecap:{
    backgroundColor: 'black',
    borderRadius: 5,
    paddingVertical: 10,
  },
  recapText: {
    color:'white',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#404D63',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    margin: 20,
  },
  closeButtonContainer:{
    //width: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: 'flex-end',
  },
  closeButton: {
    borderRadius: 5,
    borderColor: 'white',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  closeButtonText: {
    color: 'white',
  },
  whiteText:{
    color: 'white',
  },
  traversee: {
    color: '#FE9102',
    fontWeight: 'bold',
    fontSize: 16,
  },
  prix: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center'
  },
  prixAller: {
    display: 'flex',
    flexDirection: 'row',
  },
  prixRetour: {
    display: 'flex',
    flexDirection: 'row',
  },
  containerAllerRetour: {
    backgroundColor: '#676F82',
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    marginVertical: 10
  },
  /************ Recapitulatif style end ***********/

});