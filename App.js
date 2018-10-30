import React from 'react';
import { StyleSheet, 
  Text, 
  View,
  Button,
  TextInput,
  ScrollView
} from 'react-native';
import ListFilm from './ListFilm';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      listFilm: false
    }
  }
  handleSubmit = (event) => {
    this.setState({listFilm:true})
  }
  render() {
    if(this.state.listFilm === true)
      return <ListFilm />
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.container}>
            <Text style={styles.textH}>HalloMovies</Text>
            <Button title="Go !" onPress={() => this.handleSubmit(this.state.userInput)} />
          </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  searchbar: {
    padding: 20,
    //backgroundColor: '#3399FF',
    width: 300,
    textAlign: "center",
  },
	contentContainer: {
    // flex: 1,
    paddingVertical: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textH: {
    fontSize: 40,
    fontWeight: 'bold',
  }
});
