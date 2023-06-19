import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, ActivityIndicator } from 'react-native';

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!searchText) return;

    setLoading(true);

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchText.toLowerCase()}`);
      const data = await response.json();

      setSearchResults([data]);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}>Pokédex App</Text>

      <TextInput
        placeholder="Enter Pokémon name"
        value={searchText}
        onChangeText={text => setSearchText(text)}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 8, marginBottom: 16 }}
      />

      <Button title="Search" onPress={handleSearch} />

      {loading ? (
        <ActivityIndicator style={{ marginTop: 16 }} size="large" color="blue" />
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 8 }}>
              <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
              <Text>Height: {item.height}</Text>
              <Text>Weight: {item.weight}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default App;
