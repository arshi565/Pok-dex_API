import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const BookmarkButton = ({ bookmarked, onPress }) => {
  const handlePress = () => {
    onPress(!bookmarked);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image
        source={bookmarked ? require('../assets/bookmark-filled.png') : require('../assets/bookmark.png')}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default BookmarkButton;
