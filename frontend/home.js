import React, { Component, useState, useEffect } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    FAB, Alert
  } from 'react-native';
  import SearchBar from 'react-native-searchbar';
  //import Table from 'react-bootstrap/Table';
  import { Table , Button, Card } from 'reactstrap';

  import SearchContainer from './example';

function Menu() {
   
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {
      fetch('http://134.61.177.128:80/?search=hi', {
        crossDomain:true,
        method: "GET",
        headers: { 'Content-Type': 'application/json'},
        mode: "cors",
      })
      .then(resp => resp.json())
      .then( data => {
        setData(data)
        setLoading(False)
        console.log(data)
      })
      .catch(error => Alert.alert("Error", error))
  
    }, [])
  
    const renderData = (item) => {
        return(
      <Card>
        <Card.Text>{item.song_name}</Card.Text>
      </Card>
      )
    
    }
  
    const styles = StyleSheet.create({
      cardStyle: {
        padding:10,
        margin:10
      }
      });
  
    return(
        <View style={{flex:1}}>
            <FlatList data={data}
                renderItem={({ item }) => {
                    console.log(item);
                    return renderData(item);
                } }
                keyExtractor={item => `${item.song_id}`} />
        <SearchContainer data={data} />
        </View>

      /*<FAB 
      //style = {styles.fab}
      small = {false}
      icon = "plus"
      onPress = {() => console.log("Pressed")}
      />*/
  
    )
  }

  export default Menu;