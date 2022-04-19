import React from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { 
  widthPercentageToDP as wp, 
} from 'react-native-responsive-screen'
import Icons from '@assets/icons'
import { debounce } from 'lodash'

const styles = StyleSheet.create({
  btn: {
    position: 'absolute',
    left : wp(4),
    top: wp(4),
    zIndex: 4,
    backgroundColor: '#fff',
    borderRadius: wp(5),
  },
  img: {
    height: wp(10),
    width: wp(10),
    zIndex: 5,
  },
})

function BackBubbleBtn({ onPress, navigation }) {
  const debouncedOnPress = () => {
    return onPress?onPress():navigation.goBack()
  }
  
  //stops the button from being double tapped
  const onNav = debounce(debouncedOnPress, 300, { leading: true, trailing: false })
  
  return (
    <TouchableOpacity activeOpacity={.7} style={styles.btn} onPress={onNav}>
      <Image
        source={Icons.backArrow}
        style={styles.img}
      />
    </TouchableOpacity>
  )
}

export { BackBubbleBtn }
