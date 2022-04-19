import React from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native'
import Icons from '../../assets/icons'
import { BackBubbleBtn } from '../components'
import { widthPercentageToDP as wp,  } from 'react-native-responsive-screen'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headingImage: {
    width: wp(100),
    height: wp(100),
  },
  infoBlock: {
    margin: wp(2),
  },
  title: {
    flex: 1
  }
})

function Listing(props) {
  let { item, } = props.route.params
  
  if (!item) return null;

  return (
    <View style={styles.container}>
      <BackBubbleBtn navigation={props.navigation} />
      
      <Image 
        source={item.cover_image?{uri: item.cover_image}:Icons.splash}  
        style={styles.headingImage}
      />

      <View style={styles.infoBlock}>
        <Text>{item.title}</Text>
      </View>

    </View>
  )
} 

export default Listing