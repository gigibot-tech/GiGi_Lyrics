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

import Home from './home';

const items = [
    {'song_id': '1', 'song_name': '"Highway Of Heroes"', 'song_artist': 'The Trews', 'song_url': 'https://www.azlyrics.com/lyrics/trews/highwayofheroes.html'},
    {'song_id': '2', 'song_name': '"Higa"', 'song_artist': 'Arthur Nery', 'song_url': 'https://www.azlyrics.com/lyrics/arthurnery/higa.html'},
    {'song_id': '3', 'song_name': '"ONLY"', 'song_artist': 'Lee Hi', 'song_url': 'https://www.azlyrics.com/lyrics/leehi/only.html'},
    {'song_id': '4', 'song_name': '"Hit \'Em Up"', 'song_artist': '2Pac', 'song_url': 'https://www.azlyrics.com/lyrics/2pac/hitemup.html'}, {'song_id': '5', 'song_name': '"Highway To Hell"', 'song_artist': 'AC/DC', 'song_url': 'https://www.azlyrics.com/lyrics/acdc/highwaytohell.html'}, 
    {'song_id': '6', 'song_name': '"BMW"', 'song_artist': 'Because', 'song_url': 'https://www.azlyrics.com/lyrics/because/bmw.html'},
    {'song_id': '7', 'song_name': '"Easy On Me"', 'song_artist': 'Adele', 'song_url': 'https://www.azlyrics.com/lyrics/adele/easyonme.html'}, 
    {'song_id': '8', 'song_name': '"Pagsamo"', 'song_artist': 'Arthur Nery', 'song_url': 'https://www.azlyrics.com/lyrics/arthurnery/pagsamo.html'}, 
    {'song_id': '9', 'song_name': '"Savage"', 'song_artist': 'aespa', 'song_url': 'https://www.azlyrics.com/lyrics/aespa/savage.html'}, 
    {'song_id': '10', 'song_name': '"Psycho"', 'song_artist': 'Post Malone', 'song_url': 'https://www.azlyrics.com/lyrics/postmalone/psycho.html'}
];


export default class SearchContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items,
      results: []
    };
    this._handleResults = this._handleResults.bind(this);
  }

  _handleResults(results) {
    //TODO
    this.state.results = this.state.items;
    this.setState({ results });
  }

  render() {
      const menu = this.state.results.map((result, i) => {
           return (
              <div key={result.song_id} className="col-12 mt-5">
              <tr>
                  <td>{result.song_id}</td>
                  <td>{result.song_name}</td>
                  <td>{result.song_artist}</td>
                  <td><div>
                  <Button color="info" size="" href={"/results?song_url="+result.song_url}>
                   Get Lyrics </Button>
                  </div></td>
              </tr>
                <Text key={i}>
                  {typeof result === 'object' && !(result instanceof Array) ? result.toString() : result.toString()}
                </Text>
              </div>
          );
      });



      
      return (
      <View>
      <View style={{ marginTop: 110 }}>
        <div className="container">
        <Home/>
            <Table variant="dark">
            <thead>
                <th>RESULT</th>
                <th>SONG</th>
                <th>ARTIST</th>
                <th>LYRICS</th>
              </thead>
              <tbody>
                {menu}
              </tbody>
            </Table>
        </div>


        <TouchableOpacity onPress={() => this.searchBar.show()}>
            <View style={{ backgroundColor: 'green', height: 100, marginTop: 50 }}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.searchBar.hide()}>
            <View style={{ backgroundColor: 'red', height: 100 }}/>
          </TouchableOpacity>
        </View>

        <SearchBar
          ref={(ref) => this.searchBar = ref}
          data={this.props.data}
          handleResults={this._handleResults}
          showOnLoad
        />
      </View>
       );
  }
}

//export default App;