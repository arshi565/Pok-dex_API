import React, { useState } from 'react';
import { View, Text, StyleSheet, CheckBox } from 'react-native';

const FilterOptions = ({ options, onFilterChange }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = option => {
    let updatedOptions = [...selectedOptions];

    if (updatedOptions.includes(option)) {
      updatedOptions = updatedOptions.filter(item => item !== option);
    } else {
      updatedOptions.push(option);
    }

    setSelectedOptions(updatedOptions);
    onFilterChange(updatedOptions);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter Options:</Text>
      {options.map((option, index) => (
        <View key={index} style={styles.optionContainer}>
          <CheckBox
            value={selectedOptions.includes(option)}
            onValueChange={() => handleOptionChange(option)}
          />
          <Text>{option}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
});

export default FilterOptions;
