import React from 'react';
import { Text, View } from 'react-native';
import ProfilePicture from '../Pictures/ProfilePicture';

const Storie = ({uri,name}) => {
    return ( 
     
        <View style={{justifyContent:"center",alignItems:"center"}}>
        <ProfilePicture  uri={uri} />
        <Text>{name}</Text>
        </View>
       
     );
     
     
}
 
export default Storie; 