'use strict';
 
var React = require('react-native');
var {
  StyleSheet,
  View,
  Text,
  Component
} = React;
 
var styles = StyleSheet.create({
  description: {
    fontSize: 20,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
  }
});
 
class Favorites extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Favorites
        </Text>
      </View>
    );
  }
}
 
module.exports = Favorites;