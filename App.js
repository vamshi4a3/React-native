import React from 'react';
import { View ,Text,Image, TextInput, FlatList} from 'react-native';
import Menu from 'react-native-vector-icons/Entypo'
import SearchIcon from 'react-native-vector-icons/AntDesign'
import BellIcon from 'react-native-vector-icons/Fontisto'
import SettingIcon from 'react-native-vector-icons/Octicons'
import { Header } from 'react-native/Libraries/NewAppScreen';
const App = () => {
  return ( 
    
    <View style={{flex:1,backgroundColor:"#fff"}}>

      <View style={{height:40,backgroundColor:"#f5f5f5",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
          <View style={{left:10}}>
             <Menu name="menu" size={20}  color={"#a4cccc"}/>
          </View>
 
           <View style={{flexDirection:"row",width:200,justifyContent:"space-evenly",left:10}}>
              <SearchIcon name="search1" size={20} color={"#d2d2d2"} />
              <BellIcon name="bell" size={20} color={"#d2d2d2"} />
              <SettingIcon name="settings" size={20} color={"#d2d2d2"} />
              <View style={{flexDirection:"row"}}>
               <Text style={{color:"#d2d2d2",fontSize:15}}>EN</Text>
               <Menu style={{top:0}} name="chevron-small-down" size={20}  color={"#d2d2d2"}/>
              </View>
           </View>
            
      </View>
           
         
           <FlatList 
            data={[{name:"king",uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA6g22p3FA8Du-SRnjWAaIiP5We2igEGo95A&usqp=CAU"},{name:"jhon",uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA6g22p3FA8Du-SRnjWAaIiP5We2igEGo95A&usqp=CAU"},{name:"vamshi",uri:"data:image/jpeg;base64,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"}]}
             ListHeaderComponent={MainHeader}
            renderItem={({item})=><JhonWick details={item} />}
            keyExtractor={({name})=>name}
           />
           


            
    </View>
  
   );
}
 
export default App;
   
const Picture =()=>{
 
  return(
    <View style={{flexDirection:"row", width:"92%",justifyContent:"space-between",alignItems:"center",margin:20}}>
             <Image style={{width:40,height:40,borderRadius:20,borderWidth:1.5,borderColor:"#000"}} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA6g22p3FA8Du-SRnjWAaIiP5We2igEGo95A&usqp=CAU"}} />
             <TextInput  style={{width:330,height:40,borderWidth:1,borderColor:"#d2d2d2",borderRadius:20,paddingLeft:20}} placeholder="write some thing here "/>
    </View>
  )

}  

const PostHeader =({uri})=>{

  return(
    <View style={{flexDirection:"row", width:120, justifyContent:"space-between", alignItems:"center",margin:20}}>
    <Image style={{width:40,height:40,borderRadius:20,borderWidth:1.5,borderColor:"#000"}} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA6g22p3FA8Du-SRnjWAaIiP5We2igEGo95A&usqp=CAU"}} />
     
     <View>
         <Text style={{fontSize:10,fontWeight:"bold"}}>Jhon wick</Text>
         <Text style={{fontSize:8 ,color:"#d2d2d2"}}>10 apr at 7.30 pm</Text>
     </View>
       
  </View>
  )
}

const PosterBody =()=>{

  return(
    <View style={{marginLeft:22}}>
        <Text style={{color:"#ababab"}}>dkfnslkbgslh  vshglosdhgflsdhglsdhg l dkfnslkbgslh  vshglosdhgflsdhglsdhg lsdahgpsadhfpsaohfposahfop vsyposdytpoweytpSYtpsaytpa esytpaesytpb aeytpweaty pbaesoytewapbt ypaseytpb ewytpesytpoewaytpaeytp bewaytpwea ytpe awytpb weatwpet</Text>
    </View>
  )
}

const PosterFooter =()=>{
  return(
    <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:20,alignItems:"center"}}>
       <View style={{flexDirection:"row",marginLeft:18,width:60,justifyContent:"space-evenly"}}>
          <SearchIcon name="like1" size={20} color={"#a4cccc"} />
          <Text style={{color:"#a4cccc",alignSelf:'center'}}>382k</Text>
       </View>
      
      <View style={{flexDirection:"row",marginRight:8,width:130,justifyContent:"space-evenly"}}>
         <Text style={{color:"#a4cccc"}}>452K</Text>
         <Text style={{color:"#a4cccc"}}>Comments</Text>
       </View>
     </View>

  )
}

const LikeFooter =()=>{
  return(
    <View style={{justifyContent:"space-around",flexDirection:'row',alignItems:"center",marginRight:10}}>
        <View style={{flexDirection:"row",width:80,justifyContent:"space-evenly"}}>
          <SearchIcon name="like2" size={20} color={"#a4cccc"} />
          <Text style={{color:"#a4cccc",alignSelf:"center"}}>382k</Text>
       </View>
       
       <View style={{flexDirection:"row",width:90,justifyContent:"space-evenly",marginTop:5}}>
         <SettingIcon name="comment" size={20} color={"#d2d2d2"} />
         <Text style={{color:"#d2d2d2",fontWeight:'bold'}}> Comment</Text>
       </View>

       
       <View style={{flexDirection:"row",width:80,justifyContent:"space-evenly"}}>
         <SearchIcon name="sharealt" size={20}  color={"#d2d2d2"}/>
         <Text style={{color:"#d2d2d2",alignSelf:"center"}}>Share</Text>
       </View>
        
    </View>
  )
}

const JhonWick=(props)=>{

  return(
    <View style={{justifyContent:"center",alignItems:"center",marginTop:10}}> 
              <View style={{height:260,width:386,borderWidth:2,borderColor:"#000",borderRadius:10}}>
              <PostHeader details={props} />
              <PosterBody  details={props} />
              <PosterFooter details={props} />
              <View style={{ width:382,height:40,borderWidth:2,borderColor:"#d2d2d2",borderRadius:8,top:13,borderTopRightRadius:2,justifyContent:"center"}}>
              <LikeFooter />  
              </View> 
             </View>
           </View>
  )
}

const MainHeader=()=>{
  return(
    <>
    <Picture />
    <Text style={{marginLeft:20}}>Recent Post</Text>
    </>
  )
}