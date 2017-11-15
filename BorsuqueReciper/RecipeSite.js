import React from 'react';
import { Text, View, ScrollView, WebView } from 'react-native';
import { Toolbar, Card } from 'react-native-material-ui';
import RecipesList from './RecipesList';

export default class RecipeSite extends React.Component {
 
	static navigationOptions = {
		headerStyle: {
		  backgroundColor: '#72B01D',
		  height: 50
		}
		}

  render() {

  	const {goBack} = this.props.navigation;
  	const {state} = this.props.navigation;

    return (
		<WebView
			source={{uri: state.params.site}}
		/>
)}
}