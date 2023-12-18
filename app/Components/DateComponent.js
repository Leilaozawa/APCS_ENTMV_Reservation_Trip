import React, { useState } from 'react';
import { Text, View, StyleSheet, Platform, TouchableOpacity, Modal } from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import { getFormatedDate } from 'react-native-modern-datepicker';
import useDateAllerStore from '../Store/useDateAllerStore';

const DateComponent = (props) => {
  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  const today = new Date();
  const startDate = getFormatedDate(today.setDate(today.getDate() + 1), 'YYYY/MM/DD');
  const [selectedStartDate, setSelectedStartDate] = useState('');
  const [startedDate, setStartedDate] = useState('12/12/2023');

  const { setDateAller } = useDateAllerStore();


  function handleChangeStartDate(propDate) {
    setStartedDate(propDate);
  }

  const handleOnPressStartDate = () => {
    setOpenStartDatePicker(!openStartDatePicker);
  };

  return (
    <View behavior={Platform.OS == 'ios' ? 'padding' : ''}>
      <TouchableOpacity style={styles.inputBtn} onPress={handleOnPressStartDate}>
        {selectedStartDate ? (
          <Text>{selectedStartDate}</Text>
        ) : (
          <Text style={styles.selection}>{props.placeholder}</Text>
        )}
      </TouchableOpacity>

      {/* Create modal for date picker */}
      <Modal animationType="slide" transparent={true} visible={openStartDatePicker}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <DatePicker
              mode="calendar"
              minimumDate={startDate}
              selected={startedDate}
              onDateChanged={handleChangeStartDate}
              onSelectedChange={(date) => setSelectedStartDate(date)}
              options={{
                backgroundColor: 'white',
                textHeaderColor: '#0f387a',
                textDefaultColor: 'black',
                selectedTextColor: '#FFF',
                mainColor: '#FE9102',
                textSecondaryColor: '#0f387a',
                borderColor: '#0f387a',
              }}
            />
            {/*i have to set here*/}
            {console.log(selectedStartDate)}
            <TouchableOpacity onPress={handleOnPressStartDate}>
              <Text style={{ color: '#0f387a' }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  inputBtn: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#0f387a',
    height: 50,
    paddingLeft: 8,
    fontSize: 18,
    justifyContent: 'center',
  },
  selection:{
    color: '#C5C5C5',
    fontSize: 16,
    paddingLeft: 7,
  },
  submitBtn: {
    backgroundColor: '#342342',
    paddingVertical: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 12,
    marginVertical: 16,
  },
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#0F387A',
    padding: 35,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default DateComponent;
