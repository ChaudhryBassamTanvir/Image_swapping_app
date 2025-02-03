import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
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
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(TaraOne);

  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceImage(TaraOne);
        break;
      case 2:
        setDiceImage(TaraTwo);
        break;
      case 1:
        setDiceImage(TaraOne);
        break;
      case 1:
        setDiceImage(TaraOne);
        break;
      case 1:
        setDiceImage(TaraOne);
        break;
      case 1:
        setDiceImage(TaraOne);
        break;

      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
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
  diceImage: {width: 400, height: 400},

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
