import React from 'react';
import Video from 'react-native-video';
import { View ,Text,StyleSheet} from 'react-native';

const Video1 = () => {
    return ( 
        <View>
        <View style={styles.videoViewStyle}>    
         <Video style={styles.videoStyle}
             source={{ uri: 'https://storage.googleapis.com/wvmedia/cenc/h264/tears/tears.mpd',
             drm: {
               type: 'widevine',
               licenseServer: 'https://proxy.uat.widevine.com/proxy?video_id=efd045b1eb61888a&provider=widevine_test', 
            }}}
           resizeMode={'contain'}
           
           controls/>
       </View>
     </View>   
    )
}
 
export default Video1;



// Within your render function, assuming you have a file called
// "background.mp4" in your project. You can include multiple videos
// on a single screen if you like.


const styles= StyleSheet.create({
    videoStyle:{
      width: 600,
      height: 500,
      
     
  },
  videoViewStyle:{
      padding:10,
     
      
     
  }
  })