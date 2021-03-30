import React, { useEffect,useState } from 'react';

import {Text, View} from "react-native"

import VamshiNews from './VamshiNews';
const NewsDetails = ({route}) => {
   
   const [details,setDetails]=useState("")

   useEffect(()=>{
        fetch(`https://hacker-news.firebaseio.com/v0/item/${route.params.id1}.json?print=pretty`)
        .then((response)=>{
           
           return response.json()
        })
        .then((result)=>{
            //console.log("vmashi llllllllllll")
           setDetails(result)
           console.log(result)
        })


   },[])

    return ( 
    <>
    
     {details!="" ? <View style={{flex:1,alignItems:"center",backgroundColor:"#000"}}>
      
      <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
      <Text style={{color:"#fff",fontSize:16,fontWeight:"bold"}}>id: </Text>
      <Text style={{color:"#fff",fontSize:16,fontWeight:"bold"}}>{details.id}</Text>
      </View>
  
      <View style={{flexDirection:"row",justifyContent:"space-evenly",marginTop:20}}>
      <Text style={{color:"#fff",fontSize:16,fontWeight:"bold"}}>by: </Text>
      <Text style={{color:"#fff",fontSize:16,fontWeight:"bold"}}>{details.by}</Text>
      </View>
  
      <View style={{flexDirection:"row",justifyContent:"space-evenly",marginTop:20}}>
      <Text style={{color:"#fff",fontSize:16,fontWeight:"bold"}}>score: </Text>
      <Text style={{color:"#fff",fontSize:16,fontWeight:"bold"}}>{details.score}</Text>
      </View>
  
      <View style={{flexDirection:"row",justifyContent:"space-evenly",marginTop:20}}>
      <Text style={{color:"#fff",fontSize:16,fontWeight:"bold"}}>time: </Text>
      <Text style={{color:"#fff",fontSize:16,fontWeight:"bold"}}>{details.time}</Text>
      </View>
  
      <View style={{flexDirection:"row",justifyContent:"space-evenly",marginTop:20}}>
      <Text style={{color:"#fff",fontSize:16,fontWeight:"bold"}}>title: </Text>
      <Text style={{color:"#fff",fontSize:16,fontWeight:"bold"}}>{details.title}</Text>
      </View>
  
      
      <View style={{flexDirection:"row",justifyContent:"space-evenly",marginTop:20}}>
      <Text style={{color:"#fff",fontSize:16,fontWeight:"bold"}}>type: </Text>
      <Text style={{color:"#fff",fontSize:16,fontWeight:"bold"}}>{details.type}</Text>
      </View>
      </View>
       : <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#a8325b"}}><Text style={{color:"#fff"}}>...loading</Text></View>}
    </> 
     );
}
 
export default NewsDetails;