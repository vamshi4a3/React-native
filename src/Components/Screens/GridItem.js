import React from 'react';
import { Image, Text, TouchableOpacity,StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const GridItem = ({eachItem,type}) => {  

   navigation=useNavigation()
    return (
     <>
     <View style={{flexDirection:"row"}}>
     <View>
      <TouchableOpacity onPress={() => navigation.navigate('video')}>
      {eachItem.image_url!=""?<Image source = {{uri : eachItem.image_url }} style ={styles.image} />:<Image  source={require('../../Assets/minions.png')} style ={styles.image}/>}         
       </TouchableOpacity>
      </View>
       
       <View style={{justifyContent:"center"}}>
           <Text style={{color:"#fff"}} >{eachItem.original_title}</Text>
           <Text style={{color:"#fff",fontWeight:"bold"}}>{eachItem.asset_subtype} . {eachItem.genre[0].value} . {eachItem.audio_lang}</Text>
       </View>
     </View>
     

     </>
    );
}

const styles = StyleSheet.create({
    image :{
        height :80,
        width : 150,
        borderRadius:8,
        margin:10
    }
})

export default GridItem;