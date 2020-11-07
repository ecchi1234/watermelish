import React from 'react';
import FlipCard from 'react-native-flip-card';
import {View, Text, StyleSheet} from 'react-native';

<FlipCard>
  {/* Face Side */}
  <View style={styles.face}>
    <Text>The Face</Text>
  </View>
  {/* Back Side */}
  <View style={styles.back}>
    <Text>The Back</Text>
  </View>
</FlipCard>