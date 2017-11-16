import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Toolbar, Icon, COLOR } from 'react-native-material-ui';
import RecipesList from '../components/RecipesList';

class Home extends React.Component {

	static navigationOptions = {
	header: null,
	headerLeft: null
	}

  constructor(props) {
    super(props);
    this.state = {
      	recipes: []
    };
  }

  getRecipes = (value) => {
  	fetch('http://www.recipepuppy.com/api/?i=' + value , {
	  method: 'GET', 
	  mode: 'cors', 
	  credentials: 'include',
	  headers: {
	    'Accept': 'application/json, text/plain, */*',
	    'Content-Type': 'application/json'
	  },
	}).then(function(res){ return res.json() })
	.then(function(data){
		//sort by title
		let recipes = data.results.sort((a,b) => {
			return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
		});
		this.setState({ recipes: recipes })
	}.bind(this));
  }

  render() {

  	const { navigate } = this.props.navigation;

    return (
      <View>
      	<ScrollView
            keyboardShouldPersistTaps='always'
            keyboardDismissMode="interactive"
            onScroll={this.onScroll}
        >
			<Toolbar
		        key="toolbar"
		        centerElement= 'Borsuque Reciper'
		        searchable={{
		            autoFocus: true,
		            placeholder: 'Search for recipes',
		            onChangeText: value => value ? this.getRecipes(value) : this.setState({ recipes: [] })
		        }}
		    />
		    
			<RecipesList 
				recipes= {this.state.recipes}
				navigate = {navigate}
			/>

			{ !this.state.recipes.length &&
			<View style={styles.warning}>
				<Icon name='sentiment-dissatisfied' color={COLOR.green500}/>
				<Text>No recipes found</Text>
			</View>
			}
			
		</ScrollView>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  warning: {
  	margin: 50,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
});