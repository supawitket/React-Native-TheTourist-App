'use strict';
 
var React = require('react-native');
var Nearby = require('./Nearby');

var {
  StyleSheet,
  View,
  Text,
  Component,
  NavigatorIOS
} = React;

class Search extends Component {
  render() {
    return (
      <NavigatorIOS
                tintColor={'#C70039'}
                barTintColor={'#FFFFFF'}
                style={styles.container}
                initialRoute={{
                     title: 'Nearby',
                     component: Nearby,
         }}/>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

 
module.exports = Search;