import React from 'react'
import { Plane } from 'react-native-animated-spinkit'
import {
  View,
} from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

function LoadingWidget({ show }) {
  if (!show) return null
  return (
    <View style={{alignSelf: 'center', margin: hp(3) }}>
      <Plane color="#323232" size={hp(4)} type="Arc" />
    </View>    
  ) 
}

export { LoadingWidget }