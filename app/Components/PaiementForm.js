import { View, StyleSheet, Image, Text} from 'react-native';
import ProgressBarForm from './ProgressBarForm';
import Line from './Line'

const PaiementForm = () => {
    return (
        <>
        <ProgressBarForm hebergementColor= 'grey' informationsColor='grey' paiementColor='black'/>
        <View>
            <View style={styles.containerPaiement}>
                <Text>Traversée : Marseille - Alger</Text>
            </View>
            
            <View style={styles.containerPaiement}>
                <Text>Reste à payer en aller :</Text>
                <Text>960,00 EUR</Text>
                <Line/>
                <Text>Reste à payer Total :</Text>
                <Text>960,00 EUR</Text>
            </View>

            <View style={styles.containerImage}>
                <Image source={require('../Assets/paiementmobile.png')} />
            </View>
        </View>
        </>
    );
};

export default PaiementForm;

const styles = StyleSheet.create({
    containerPaiement:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom:20,
        marginRight:10,
        marginLeft:10,
        borderRadius: 10,
        height: 'auto', 
        backgroundColor: '#DEEFFF',
        padding: 10,
    }
})
