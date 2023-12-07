
import { View, Text } from 'react-native';

//Componenets:
import RecommandationProgramCard from './RecommandationProgramCard';
import ProgressBarForm from '../Components/ProgressBarForm';
import ChoixHebergement from '../Components/ChoixHebergement'
import Installation from '../Components/Installation';

const HebergementForm = () => {
    return (
        <View>
            <ProgressBarForm hebergementColor='black' informationsColor='grey' paiementColor='grey'/>
            <RecommandationProgramCard/>
            <ChoixHebergement/>
            <Installation/>
      </View>
    );
};

export default HebergementForm;
