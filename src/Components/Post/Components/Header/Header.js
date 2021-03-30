import React from 'react';
import { Text, View } from 'react-native';
import ProfilePicture from '../../../Pictures/ProfilePicture';
import Icon from 'react-native-vector-icons/Entypo';
import Styles from "./Styles"
const Header = ({uri,name}) => {
    return ( 
        <View style={Styles.container}>
           <View style={Styles.left}> 
           <ProfilePicture uri={uri} size={40} />
           <Text style={Styles.text}>{name}</Text>
           </View>
           <View style={Styles.right}>
           <Icon style={{justifyContent:"center",alignItems:"center"}} name="dots-three-vertical" size={20}  />
           </View>
           
        </View>
     );
}
 
export default Header;