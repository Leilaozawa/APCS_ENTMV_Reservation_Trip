
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';

//components
import InformationForm from '../../Components/InformationForm';
import PaymentForm from '../../Components/PaymentForm';
import HebergementForm from '../../Components/HebergementForm';


const Home = () => {
  //const [hebergement, setHebergement] = useState(true);
  const [hebergement, setHebergement] = useState(false);
  const [information, setInformation] = useState(true);
  //const [information, setInformation] = useState(false);
  const [payment, setPayment] = useState(false);
  return (
    <ScrollView>
    {hebergement &&
      <HebergementForm/>
    }
    {information &&
      <InformationForm/>
    }
    {payment &&
      <PaymentForm/>
    }
      </ScrollView>
    
  );
}

export default Home;
