import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';
import { Card, Avatar, Icon, COLOR } from 'react-native-material-ui';

export default class RecipesListItem extends React.Component {

  render() {

    const ingredientsList = [];

    this.props.recipe.ingredients.split(' ').map((ingredient) => {
      ingredient = ingredient.replace(/,/,'');
      ingredientsList.push(
        <View style={styles.row} key={ingredient}>
          <Icon name='chevron-right' color={COLOR.green500}/>
          <Text>
            {ingredient}
          </Text>
        </View>
      );
    })

    return (
      <Card>
        <View style={styles.cardContainer}>
          <View style={styles.header}>        
            <Image
              style={styles.image}
              source={{uri: this.props.recipe.thumbnail}}
            />
            <TouchableOpacity
              onPress={ () => {
                Keyboard.dismiss();
                this.props.navigate('RecipeSite', {site:  this.props.recipe.href});
              }}
            >
              <Text style={styles.title}>
                {this.props.recipe.title}
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            {ingredientsList}
          </View>
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    flexWrap: 'wrap'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5
  },
  image: {
    width: 48, 
    height: 48,
    borderRadius: 24
  },
  cardContainer: {
    padding: 5
  }
});