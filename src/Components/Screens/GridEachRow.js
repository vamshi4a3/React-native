import React, { useState } from 'react';
import {Text, FlatList, StyleSheet, View, TouchableHighlight,VirtualizedList} from 'react-native';
import GridItem from './GridItem';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const GridEachRow = ({eachBucket}) => {

    
  return (
    <>
      <View >
        
        <FlatList
          data={eachBucket}
          
          renderItem={({item, index}) => <GridItem eachItem={item} />}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator = {false}
        />

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  RowContainer: {  
    paddingVertical : 0,
    top: -5
    
  },
  Header :{
      flexDirection : 'row',
      height : 40,
      justifyContent : 'space-between',
      alignItems : 'center',
      paddingLeft : 18,
      paddingRight : 18
  }
});
export default GridEachRow;
