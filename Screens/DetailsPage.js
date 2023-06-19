import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import BookmarkButton from './BookmarkButton';

const DetailsPage = ({ pokemon, onBookmarkToggle }) => {
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
        <BookmarkButton bookmarked={pokemon.bookmarked} />
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
});

export default DetailsPage;
