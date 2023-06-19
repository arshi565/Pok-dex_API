import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const PokemonDetails = ({ pokemon, onBookmarkToggle }) => {
  const handleBookmarkToggle = () => {
    onBookmarkToggle(pokemon);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: pokemon.image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{pokemon.name}</Text>
        <Text style={styles.details}>Height: {pokemon.height}</Text>
        <Text style={styles.details}>Weight: {pokemon.weight}</Text>
      </View>
      <TouchableOpacity onPress={handleBookmarkToggle}>
        <Image
          source={pokemon.bookmarked ? require('../assets/bookmark-filled.png') : require('../assets/bookmark.png')}
          style={styles.bookmarkIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
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
  bookmarkIcon: {
    width: 24,
    height: 24,
  },
});

export default PokemonDetails;
