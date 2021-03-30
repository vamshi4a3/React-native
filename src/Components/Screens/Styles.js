import React from 'react';

import {StyleSheet} from "react-native"

const Styles=StyleSheet.create({
    headerText :{
        fontSize:16,
        fontWeight:'bold',
        color:'#fff'   
      },
      headerText1 :{
        fontSize:12,
        fontWeight:'normal',
        color:'#fff',
        opacity:0.65   
      },
      headerContainer:{    
        flexDirection:'row',
        height:50,
        backgroundColor:'#17001a',
        alignItems:'center',
        justifyContent:'space-between',
        padding:15
      },
})

export default Styles;