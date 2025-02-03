import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import type {PropsWithChildren} from 'react';
import TaraOne from '../assets/1.jpg';
import TaraTwo from '../assets/2.jpg';
import TaraThree from '../assets/3.jpeg';
import TaraFour from '../assets/4.jpeg';
import TaraFive from '../assets/5.jpg';
import TaraSix from '../assets/6.jpeg';

type DiceProps = PropsWithChildren<{imageUrl: ImageSourcePropType}>;

const Dice = ({imageUrl}: DiceProps) => {
  return (
    <View>
      <Image source={imageUrl} style={styles.diceImage}></Image>
    </View>
  );
};

const App = () => {
  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceDirection: {
    margin: 12,
  },
  diceImage: {width: 200, height: 200},

  rollDiceBtnTxt: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7EA',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
