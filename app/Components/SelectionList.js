// This component essentially creates a dropdown list using the SelectList component
// and manages the selected value using the state variable selected.
// The data array provides the options for the dropdown.
// When an option is selected, the setSelected callback is triggered
// to update the selected state with the chosen value.

import { View, Text } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import React, { useState } from 'react';

const SelectionList = ({ onSelect, setHide }) => {
  // State to manage the selected value
  const [selected, setSelected] = useState("");

  // Data array for the dropdown options
  const data = [
    { key: '1', value: 1 },
    { key: '2', value: 2 },
    { key: '3', value: 3 },
    { key: '4', value: 4 },
    { key: '5', value: 5 },
    { key: '6', value: 6 },
    { key: '7', value: 7 },
    { key: '8', value: 8 },
    { key: '9', value: 9 },
  ];

  // Callback function when an option is selected
  const handleSelect = (val) => {
    setSelected(val);
    onSelect(val); // Callback to handle selected value in the parent component
    setHide(true); // Callback to update the hide state in the parent component
  };

  return (
    <View>
      <SelectList
        placeholder="Choisir"
        search={false}
        setSelected={(val) => handleSelect(val)}
        data={data}
        save="value"
        onSelect={() => setHide(true)}
      />
    </View>
  );
};

export default SelectionList;
