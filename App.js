import React from 'react';
import { StyleSheet, 
  Text, 
  View,
  Button,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import ListFilm from './ListFilm';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      listFilm: false
    }
  }
  handleSubmit = () => {
    this.setState({listFilm:true})
  }
  render() {
    if(this.state.listFilm === true)
      return <ListFilm />
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Image style={{height: 240, width: 300}} source={require('./Toile_d_araignée.png')} />
          <View style={styles.container}>
            <Image style={{height: 240, width: 300}} source={require('./logo_hackaton.png')} />
            <TouchableOpacity onPress={() => this.handleSubmit()}
                style ={{
                    height: 100,
                    width:250,
                    marginLeft :50,
                    marginRight:50,
                    marginTop :20,
                    backgroundColor:'#DF6D14',
                    borderRadius: 100
                }}>
            <Text style={{color:'white',marginRight:'auto',marginLeft:'auto',marginTop:'auto',marginBottom:'auto',fontSize:20}}>
            Vas y clique, tu verras ...
              </Text>
           </TouchableOpacity>
          </View>
          
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  
	contentContainer: {

    backgroundColor:'#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textH: {
    fontSize: 40,
    fontWeight: 'bold',
  }
});
