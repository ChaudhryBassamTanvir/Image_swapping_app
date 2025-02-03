import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
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
      <Image source={imageUrl} style={styles.taraImage}></Image>
    </View>
  );
};

const App = () => {
  const [Image, setImage] = useState<ImageSourcePropType>(TaraOne);

  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setImage(TaraOne);
        break;
      case 2:
        setImage(TaraTwo);
        break;
      case 3:
        setImage(TaraThree);
        break;
      case 4:
        setImage(TaraFour);
        break;
      case 5:
        setImage(TaraFive);
        break;
      case 6:
        setImage(TaraSix);
        break;

      default:
        setImage(TaraOne);
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Dice imageUrl={Image} />

      <Pressable onPress={rollDiceOnTap}>
        <Text style={styles.SwapImageBtnTxt}> Change the Image</Text>
      </Pressable>
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
  ImageDirection: {
    margin: 12,
  },
  taraImage: {width: 400, height: 400},

  SwapImageBtnTxt: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    backgroundColor: '#FF0000',
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
