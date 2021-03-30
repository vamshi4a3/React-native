import React from 'react';
import { Text, View,Image } from 'react-native';
const Body = ({uri}) => {
    return ( 
        <View>
            <Image style={{width:"100%",height:300}} source={{uri}}/>
        </View>
      );
}
 
export default Body;