import React from 'react';
import { Text, View, ScrollView, WebView } from 'react-native';
import { Toolbar, Card } from 'react-native-material-ui';
import RecipesList from '../components/RecipesList';

export default class RecipeSite extends React.Component {
 
  render() {

  	const {state} = this.props.navigation;

    return (
		<WebView
			source={{uri: state.params.site}}
		/>
)}
}