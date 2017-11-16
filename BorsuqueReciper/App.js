import React, { Component } from 'react';
import { NativeModules, StatusBar, View, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './sites/Home';
import RecipeSite from './sites/RecipeSite';
import { COLOR, ThemeProvider } from 'react-native-material-ui';

const Router = StackNavigator({
  Home: {screen: Home},
  RecipeSite: {screen: RecipeSite}
}, 
{
    initialRouteName: 'Home',
    headerMode: 'none'
  }
)

const uiTheme = {
    palette: {
        primaryColor: COLOR.green500,
    },
    toolbar: {
        container: {
            height: 50,
        },
    },
};

export default class App extends Component {

    render() {
        return (
            <ThemeProvider uiTheme={uiTheme}>
              <View  style={styles.container}>
                <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />
                <View style={{ backgroundColor: COLOR.green700, height: 24 }} />
                <Router
                />
              </View>
            </ThemeProvider>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});