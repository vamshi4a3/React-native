import React from 'react';
import { FlatList } from 'react-native';
import Post from '../Post/post';
import InstaStories from '../InstaStories/InstaStories';
const Feed = () => {

  data=[
    {

        user:{
            imageuri:"https://static.billboard.com/files/media/minions-press-billboard-650-compressed.jpg",
            name:"vamshi"
        },
        image:{
             uri:"https://static.billboard.com/files/media/minions-press-billboard-650-compressed.jpg"
        },
         likes:2000,
         caption:"beauty with brain",
         posted:"2 min ago"
        
      },

      {

        user:{
            imageuri:"https://static.billboard.com/files/media/minions-press-billboard-650-compressed.jpg",
            name:"vamshi"
        },
        image:{
             uri:"https://static.billboard.com/files/media/minions-press-billboard-650-compressed.jpg"
        },
         likes:2003,
         caption:"beauty with brain",
         posted:"2 min ago"
        
      } ,

      {

        user:{
            imageuri:"https://static.billboard.com/files/media/minions-press-billboard-650-compressed.jpg",
            name:"vamshi"
        },
        image:{
             uri:"https://static.billboard.com/files/media/minions-press-billboard-650-compressed.jpg"
        },
         likes:2004,
        
         caption:"beauty with brain",
         posted:"2 min ago"
        
      } 
  ]

    return ( 
    <>
         <FlatList 
           data={data}
            renderItem={({item})=><Post userdata={item}/>}
            keyExtractor={({likes})=>likes.toString()}
            ListHeaderComponent={InstaStories}
         />
    </>

     );
}
 
export default Feed;