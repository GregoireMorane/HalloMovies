import React, { Component } from 'react';
import { StyleSheet, 
	Text, 
	View,
	ScrollView,
	Button,
	Image,
	WebView
 } from 'react-native';
import App from './App'
export default class FicheFilm extends Component {
	constructor(props){
		super(props);
		this.state = {
			film : null,
			trailer : null,
			renderApp : false,
		}
	}
	componentDidMount(){
		fetch(`https://api.themoviedb.org/3/movie/${this.props.filmId}?api_key=fe92e01fc7f7de2e7bb39a4066baf3c3`)
			.then(resp => resp.json())
			.then(resp => this.setState({film : resp}))
		fetch(`http://api.themoviedb.org/3/movie/${this.props.filmId}/videos?api_key=fe92e01fc7f7de2e7bb39a4066baf3c3`)
			.then(resp => resp.json())
			.then(resp => this.setState({trailer : resp.results}))
	}
	handleClickRenderApp = () => {
		this.setState({renderApp : true})
	}

	render(){
		if(this.state.renderApp === true)
			return <App />
		if(this.state.film === null)
			return <Text>Loading...</Text>
		if(this.state.trailer === null)
			return <Text>Loading...</Text>
		if(Object.getOwnPropertyNames(this.state.trailer).length === 0)
			return <Text>No trailer</Text>
		console.log("film", this.state.film.title)
		return(
			<ScrollView contentContainerStyle={styles.contentContainer}>
				<View style={styles.container} >
					<Text style={styles.textH} onPress={() => this.handleClickRenderApp()}>HalloMovies</Text>
					<Text style={styles.textTitle}>{this.state.film.title}</Text>
				</View>
				<View style={styles.container} >
				<Text>{this.state.film.overview}</Text>
				<WebView
					style={{flex:1, width : 350, height: 200}}
					javaScriptEnabled={true}
					source={{uri: `https://www.youtube.com/embed/${this.state.trailer[0].key}?rel=0&autoplay=0&showinfo=0&controls=0`}}
					/>
				</View>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	contentContainer: {
		paddingVertical: 20,
	},
	textH: {
		fontSize: 40,
		fontWeight: 'bold',
		paddingVertical: 30,
	},
	textNameFilm: {
		paddingVertical: 20,
		fontSize: 20,
		fontWeight: 'bold',
	},
	textTitle:{
		paddingVertical: 20,
		fontSize: 30,
		fontWeight: 'bold',
	}
});