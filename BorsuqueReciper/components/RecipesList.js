import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-material-ui';
import RecipesListItem from './RecipesListItem';

export default class RecipesList extends React.Component {

  render() {

  	const recipesList = [];

  	this.props.recipes.forEach((recipe) => {
  		recipesList.push(
  			<RecipesListItem 
  				key={recipe.title} 
  				recipe={recipe}
  				navigate = {this.props.navigate}
  			/>
  		);
  	})

    return (
      <View>
		{recipesList}
      </View>
    );
  }
}