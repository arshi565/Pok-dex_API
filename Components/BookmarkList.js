import React from 'react';
import { View, FlatList } from 'react-native';
import PokemonItem from './PokemonItem';

const BookmarkList = ({ data, onItemPress, onRemoveBookmark }) => {
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
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </View>
  );
};

export default BookmarkList;
