import React, { useEffect,useState} from 'react';
import { View,Text,TouchableOpacity, StyleSheet,FlatList,ActivityIndicator } from 'react-native';


 
const VamshiNews = ({navigation}) => {

  const nextPage=(id)=>{
   
  navigation.navigate('NewsDetails',{id1:id}) 
  }

  const [nextItem,setNextItem]=useState("")
  useEffect(()=>{
   fetch("https://hacker-news.firebaseio.com/v0/updates.json?print=pretty")
   .then((result)=>{
       return result.json()
   })
   .then((response)=>{
        
       // setNewsid(response.items)
     
        response.items.map((item)=>{
            fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`)
            .then((res)=> res.json()
            )
            .then((result)=>{
                setNextItem(nextItem=>[...nextItem,result])
            })
        })

   })

  },[])
    return ( 
<>

  <View style={{flex:1,alignItems:"center",backgroundColor:"#000"}}>
      <View style={{width:"100%",height:60,backgroundColor:"#a8325b",justifyContent:"center",alignItems:"center"}}>
         <Text style={{color:"#FFF",fontWeight:"bold",fontSize:20}}>News</Text>
      </View>

      {nextItem!=""?
      <FlatList
          data={nextItem}
          renderItem={({item, index}) => 
           
             <View style={styles.newsContainer}>
            <View style={{width:"100%",height:80,backgroundColor:"#fff",justifyContent:"center",alignItems:"center"}}>
            <Text onPress={()=>nextPage(item.id)} style={{fontSize:20,color:'#000'}}>{item.by}</Text>
            </View>
            <Text>{"\n"}{"\n"}</Text>
            <View style={{width:200,height:3}}></View>
          </View>              
           
          }

          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator = {false}
        /> : <View style={[{flex:1,justifyContent:"center",alignItems:"center"}]}><ActivityIndicator style={{justifyContent:"center"}} size="large" color="#0000ff" /></View> } 
  </View>
</>

     );
}
 
const styles=StyleSheet.create({
  newsContainer:{
   alignItems:"center",
   marginTop:20
   
  }

})
export default VamshiNews;