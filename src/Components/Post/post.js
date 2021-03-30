import React from 'react';
import { View } from 'react-native';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

const Post = ({userdata:{user,image,likes,caption,posted}}) => {
    
    return (

        <View style={{margin:10}}>
            <View>
            <Header uri={user.imageuri} name={user.name}/>
    
            </View>
            <Body uri={image.uri} />
            <Footer likes={likes} caption={caption} posted={posted} />
            
        </View>
      );
}
 
export default Post;