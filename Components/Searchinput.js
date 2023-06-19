import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const SearchInput = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    if (searchText.trim() !== '') {
      onSearch(searchText.trim());
    }
  };

  return (
    <View style={{ marginBottom: 16 }}>
      <TextInput
        placeholder="Enter Pokémon name"
        value={searchText}
        onChangeText={text => setSearchText(text)}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 8 }}
      />

      <Button title="Search" onPress={handleSearch} />
    </View>
  );
};

export default SearchInput;
