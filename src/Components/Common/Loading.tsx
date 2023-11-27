import React from 'react';
import {Modal, ActivityIndicator, View, StyleSheet} from 'react-native';

import {useTheme} from '../../Context/ThemeProvider';

interface Loadingcomp {
  isVisible: boolean;
}

function Loading({isVisible}: Readonly<Loadingcomp>) {
  const {theme: colors} = useTheme();

  return (
    <Modal
      transparent
      animationType="fade"
      visible={isVisible}
      onRequestClose={() => {}}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.primary500} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default Loading;
