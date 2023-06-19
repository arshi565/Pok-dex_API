import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import PokemonItem from './PokemonItem';

const ListingPage = ({ data, loadMore, onItemPress }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    if (!isLoading) {
      setIsLoading(true);
      loadMore().finally(() => setIsLoading(false));
    }
  };

  const renderItem = ({ item }) => {
    return (
      <PokemonItem
        pokemon={item}
        onPress={onItemPress}
      />
    );
  };

  useEffect(() => {
    handleLoadMore();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
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

export default ListingPage;
