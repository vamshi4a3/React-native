import React,{useState} from 'react';
import { View ,Text, TextInput,FlatList, TouchableOpacity} from 'react-native';
import { useEffect } from 'react/cjs/react.development';
import GridEachRow from './GridEachRow'
import Styles from '../Screens/Styles';
import Api from '../../Api/Api'
import Cross from 'react-native-vector-icons/Entypo'
//import { ScaleFromCenterAndroid } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
const SerchScreen = () => {
  const [Quote,setQuote]=useState("vamshi")
  const [data,setData]=useState("")   
  const [list,setList]=useState([ "All", "Episodes", "Tvshows", "Movies", "News", "Music", "Videos"])
   const [selected,setSelected]=useState("all")

   
  
    const setShowPopUp=()=>{

        console.log("ho")
    }

    useEffect(() => {
        async function fetchData() {
            var api=new Api();
            let response = await api.getSearch(Quote, 1)
            array=[response[selected]]
            setData(array)
        }
        fetchData();
      }, [Quote,selected]);


      const selectedMenu=(index)=>{
       setSelected(list[index].toLowerCase())
      }


    return ( 

        <View style={{flex:1,backgroundColor : '#290025'}}>
        <View style={Styles.headerContainer}>
         <Text style ={[Styles.headerText,{fontSize:30}]} onPress ={()=>{setShowPopUp(true)}}>{'<'}</Text>
         <TextInput
                            placeholder={'Enter Any Thing To See Results'}
                            style={{color:"#fff",width:290,height:40}}
                            value={Quote}
                            onChangeText={(e) => setQuote(e)}
                            
                        />
      <TouchableOpacity onPress={()=>setQuote('')}>
      <Cross name="cross" size={30} color={"#fff"} /> 
      </TouchableOpacity>
         
      </View> 
           
      <View style={{height:40,backgroundColor:"#381642"}}>

{data!=""? <FlatList
  style={{marginLeft:30}}
  horizontal
  data={list}
  renderItem={({item, index}) => <View style={{justifyContent:"center"}}>
      <TouchableOpacity style={{marginRight:40}} onPress={()=>selectedMenu(index)}>
          <Text style={{color:"#fff"}}>{item}</Text>
      </TouchableOpacity>
  </View>}
  keyExtractor={(item, index) => index.toString()}
  showsVerticalScrollIndicator={false}

/>:<Text></Text>}
  </View>
      

            <View>

          {data!=""? <FlatList
           
            data={data}
            renderItem={({item, index}) => <GridEachRow eachBucket = {item}/>}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
          
          />:<Text style={{color:"#fff"}}>Type Any Letter To see Results</Text>}
            </View>
   
         
      </View> 
        
     );
}
 
export default SerchScreen;