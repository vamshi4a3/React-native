import React, { useEffect } from 'react';
import { View } from 'react-native';
import axios from 'axios'

const App = () => {

   useEffect(async()=>{
    const KEY= 'AIzaSyDrRkbdE0Ok96vg-uSt5Sv0m_2nAV7AuvI'
    const response=await axios.get('https://www.googleapis.com/youtube/v3/search',{
    
        params:{
            part:'snippet',
            maxResults:10,
            key:`${KEY}`,
            type:'video',
            q:"let me love you"
        }
    

   })

   console.log(response)

})

    return ( 
    <View>
     
     <Text>welcome to youtube</Text>
    
    </View>  
    );
}
 
export default App;