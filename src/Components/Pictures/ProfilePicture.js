import React from 'react';

import {Image, View} from 'react-native'

import Styles from './Styles'

const ProfilePicture = ({uri,size=70}) => {
    return ( 

        <>
           <View style={Styles.conatiner}>
            <Image style={[Styles.image,{width:size,height:size, borderRadius:size/2,}]} source={{uri}} />
           </View>
           
        </>
     );
}


 
export default ProfilePicture;