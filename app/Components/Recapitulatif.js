import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, Button } from 'react-native';
import { styles } from '../Styles/Recapitulatif';
import useTarifStore from '../Store/useTarifStore';
import useAdulteStore from '../Store/useAdulteStore';
import useDestinationAllerStore from '../Store/useDestinationAllerStore';


const Recapitulatif = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { tarif } = useTarifStore(); // Import tarif from the store
  const { adulte } = useAdulteStore();
  const { destinationAller } = useDestinationAllerStore();
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.ButtonRecap} onPress={openModal}>
          <Text style={styles.recapText}>Récapitulatif</Text>
        </TouchableOpacity>
      </View>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            
            <View style={styles.closeButtonContainer}>
              <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <Text style={styles.closeButtonText}>X</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.traversee}>Traversée: {String(destinationAller)} | {String(destinationAller).split('-').reverse().join(' - ')} </Text>

            <View style={styles.prix}>
              <View style={styles.prixAllerRetour}>
                <View style={styles.prixAller}>
                  <Text style={styles.whiteText}>Devis aller :</Text>
                  <Text style={styles.whiteText}>881,00 EUR</Text>
                </View>
                <View style={styles.prixRetour}>
                  <Text style={styles.whiteText}>Devis retour :</Text>
                  <Text style={styles.whiteText}>881,00 EUR</Text>
                </View>
              </View>
              <View style={styles.prixTotal}>
                <Text style={styles.whiteText}>Devis total :</Text>
                <Text style={styles.whiteText}>1 762,00 EUR</Text>
              </View>
            </View>

            <View style={styles.containerAllerRetour}>
            <Text style={styles.whiteText}>Tarif: {String(tarif)}</Text> 
            <Text style={styles.whiteText}>Passagers: </Text>
            <Text style={styles.whiteText}>Adultes: {String(adulte)}</Text>
            <Text style={styles.whiteText}>Véhicules: </Text>
            </View>

            <View style={styles.containerAllerRetour}>
            <Text style={styles.whiteText}>Tarif: {String(tarif)}</Text> 
            <Text style={styles.whiteText}>Passagers: </Text>
            <Text style={styles.whiteText}>Adultes: {String(adulte)}</Text>
            <Text style={styles.whiteText}>Véhicules: </Text>
            </View>
            
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Recapitulatif;
