
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';

//components
import InformationForm from './InformationForm';
import PaymentForm from './PaymentForm';
import HebergementForm from './HebergementForm';


const Home = () => {

  return (
    <ScrollView>
      <HebergementForm/>
      </ScrollView>
    
  );
}

export default Home;
