import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Toolbar, Card } from 'react-native-material-ui';
import RecipesList from './RecipesList';

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
		this.setState({ recipes: data.results })
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
		</ScrollView>
      </View>
    );
  }
}

export default Home;