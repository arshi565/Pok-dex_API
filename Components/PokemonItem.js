import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const PokemonItem = ({ pokemon, onPress }) => {
  const handlePress = () => {
    onPress(pokemon);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image source={{ uri: pokemon.image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{pokemon.name}</Text>
        <Text style={styles.details}>Height: {pokemon.height}</Text>
        <Text style={styles.details}>Weight: {pokemon.weight}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 16,
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  details: {
    fontSize: 14,
  },
});

export default PokemonItem;
