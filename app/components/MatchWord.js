import React from 'react';
import { Image , View, Text } from 'react-native';

import ImgGame from '../img/spring2.png';
import styles from '../font/fontGame';


export default function MatchWord(props){
    return (
      <View >
        <Text style={styles.title}>Ghép từ</Text>
        <View style={styles.game}>
          <View >
            <Image style={styles.image} source={ImgGame} />
          </View>
          <View >
            <Text style={styles.textScore}>Điểm cao</Text>
            <Text style={styles.textScore}>{props.score}</Text>
          </View>
        </View>
      </View>
    );
        
}
