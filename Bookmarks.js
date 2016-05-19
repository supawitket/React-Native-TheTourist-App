'use strict';
 
var React = require('react-native');
var {
  StyleSheet,
  View,
  Text,
  Component,
  ScrollView,
  Image,
} = React;
 
var styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F9F9F9',
  },
  itemFeatured: {
    width: 420,
    height: 300,
  },
  itemCityBookmark: {
    width: 420,
    height: 180,
  },
  itemViewBookmark: {
    width: 420,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(10,10,10,0.6)'
  },
  itemView: {
    width: 420,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(10,10,10,0.6)'
  },
  textLarge: {
    color: '#FFFFFF',
    fontSize: 40,
  },
  textMid: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  textSmall: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 13,
    fontStyle: 'italic',
  },
  textIcon: {
    color: '#FFF',
    backgroundColor: '#E74C3C',
    paddingLeft:10,
    paddingTop:3,
    paddingRight:10,
    paddingBottom:3,
  },
  textList: {
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
    padding:15,
    fontSize:15,
    marginBottom:1,
  }
});
 
class Bookmarks extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Image source={require('./Assets/City/bangkok.jpg')} style={styles.itemFeatured}>
          <View style={styles.itemView}>
                  <Text style={styles.textIcon}>Now</Text>
                  <Text style={styles.textLarge}>Bangkok</Text>
                  <Text style={styles.textMid}>Thailand</Text>
                  <Text style={styles.textSmall}>100 Activities awaiting</Text>
                </View>
        </Image>

        <Text style={styles.textList}>Upcoming event: Songkran days!</Text>
        <Text style={styles.textList}>Read Do's and Dont's in Bangkok</Text>
        <Text style={styles.textList}>Mostly Cloudy</Text>

        <View style={{marginTop: 20}}>
          <Image source={require('./Assets/City/singapore.jpg')} style={styles.itemCityBookmark}>
            <View style={styles.itemViewBookmark}>
                    <Text style={styles.textLarge}>Singapore</Text>
                    <Text style={styles.textMid}>Singapore</Text>
                    <Text style={styles.textSmall}>68 Activities awaiting</Text>
                  </View>
          </Image>
          <Image source={require('./Assets/City/kl.jpg')} style={styles.itemCityBookmark}>
            <View style={styles.itemViewBookmark}>
                    <Text style={styles.textLarge}>Kualar Lumpur</Text>
                    <Text style={styles.textMid}>Malaysia</Text>
                    <Text style={styles.textSmall}>68 Activities awaiting</Text>
                  </View>
          </Image>
          <Image source={require('./Assets/City/saigon.jpg')} style={styles.itemCityBookmark}>
            <View style={styles.itemViewBookmark}>
                    <Text style={styles.textLarge}>Saigon</Text>
                    <Text style={styles.textMid}>Vietnam</Text>
                    <Text style={styles.textSmall}>68 Activities awaiting</Text>
                  </View>
          </Image>
        </View>
      </ScrollView>
    );
  }
}
 
module.exports = Bookmarks;