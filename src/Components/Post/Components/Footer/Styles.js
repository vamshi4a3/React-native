import {StyleSheet} from 'react-native'

const Styles=StyleSheet.create({

  container:{
      margin:5
  },
  likes:{
    margin:3,
    fontWeight:"bold"
  },
  caption:{
    margin:3,
    color:"#000"
  } ,
  posted:{
    margin:3,
    color:"#8c8c8c"
  },
  icons:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  leftIcons:{
    width:120,    
    right:20,
    justifyContent:"space-evenly",
    flexDirection:"row",
  },
  righIcon:{
     left:5
  }


})

export default Styles