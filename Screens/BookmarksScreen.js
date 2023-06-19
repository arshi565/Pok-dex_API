import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import PokemonItem from './PokemonItem';

const BookmarksScreen = ({ data, onItemPress, onRemoveBookmark }) => {
  const renderItem = ({ item }) => {
    return (
      <PokemonItem
        pokemon={item}
        onPress={onItemPress}
        onRemoveBookmark={onRemoveBookmark}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
  },
});

export default BookmarksScreen;
