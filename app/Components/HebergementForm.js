
import { View, Text, StyleSheet } from 'react-native';

//Componenets:
import RecommandationProgramCard from './RecommandationProgramCard';
import ProgressBarForm from '../Components/ProgressBarForm';
import ChoixHebergement from '../Components/ChoixHebergement'
import Installation from '../Components/Installation';
import Recapitulatif from './Recapitulatif';
import { ScrollView } from 'react-native-gesture-handler';

const HebergementForm = () => {
    return (
        <>
        <ScrollView style={styles.scrollView}>
            <ProgressBarForm hebergementColor='black' informationsColor='grey' paiementColor='grey'/>
            <RecommandationProgramCard/>
            <ChoixHebergement/>
            <Installation/>
        </ScrollView>
        <Recapitulatif />
        </>
    );
};

export default HebergementForm;


const styles = StyleSheet.create({
    scrollView:{
        marginBottom: 75,
    }
})