import React from 'react'
import {View,TouchableHighlight,Text,StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  
    button:{
        backgroundColor:'blue',
        paddingVertical: 15,
        paddingHorizontal:20,
        borderRadius:4
    },
    text:{
        color:'#fff',
        fontSize:18
    }
})
export default({title,onPress}) => 
<TouchableHighlight style = {styles.button} onPress={onPress}>
    <Text style = {styles.text}>{title}</Text>
</TouchableHighlight>