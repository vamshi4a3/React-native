import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Styles from './Styles'
import Heart from 'react-native-vector-icons/AntDesign'
import Comments from 'react-native-vector-icons/Fontisto'
import Paper from 'react-native-vector-icons/Ionicons'
import Bookmark from 'react-native-vector-icons/FontAwesome'
const Footer = ({likes,caption,posted,displayLikes}) => {
  const [like,setLikes]=useState(false)
  const [likesdisplay,setLikesDisplay]=useState(likes)
 

  const likePressed=()=>{
     setLikes(!like)
     like? setLikesDisplay((likes-1)) :setLikesDisplay((likes))
  }
    return ( 
        <View style={Styles.container}>

            

            <View style={Styles.icons}>
                
            <View style={Styles.leftIcons} >
                <TouchableOpacity onPress={likePressed}>
                  {like?<Heart name="heart" size={20} color={"#fc0345"} /> :<Heart name="hearto" size={20} color={"#000"}/> }  
                </TouchableOpacity>
                <Comments name="comment" size={18}/>
                <Paper name="paper-plane-outline" size={20} />
            </View>
            <View style={Styles.righIcon} >
                <Bookmark name="bookmark-o" size={20} />
            </View>
            </View>

            <Text style={Styles.likes}>{likesdisplay} likes</Text>
            <Text style={Styles.caption}>{caption}</Text>
            <Text style={Styles.posted}>{posted}</Text>
        </View>
     );
}
 
export default Footer;