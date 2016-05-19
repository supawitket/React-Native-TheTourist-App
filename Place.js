'use strict';
 
var React = require('react-native');
 
var {
  StyleSheet,
  View,
  ScrollView,
  TouchableHighlight,
  Text,
  Image
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
    height: 400,
  },
  viewMap: {
    width:420,
    height:200,
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.8)'
  },
  viewMapBody: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    margin: 20,
    marginTop: 60,
    padding: 10,
  },
  textBig: {
    color: '#000',
    fontSize: 25,
    marginBottom: 5
  },
  textMid: {
    color: 'rgba(0,0,0,0.5)',
  },
  textBookmark: {
    color: '#16A085',
    marginTop: 5,
    paddingTop: 5,
    fontWeight: 'bold'
  },
  textRating: {
    color: '#F1C40F',
    position: 'absolute',
    right: 15,
    bottom: 10,
    fontWeight: 'bold'
  },
  textHeadline: {
    color: '#E74C3C',
    fontSize: 25,
    padding:10,
    marginTop:20,
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

var Place = React.createClass({
  goDerper: function() {
    this.props.navigator.push({
               title: 'Even lower',
               component: LowestChild,
           });
  },
  render: function() {
    return (
      <ScrollView style={styles.container}>
        <Image source={require('./Assets/Places/place-1.png')} style={styles.itemFeatured}>
        </Image>
        <Image source={require('./Assets/Places/map.png')} style={styles.viewMap}>
          <View style={styles.viewMapBody}>
            <Text style={styles.textBig}>
              Tajima Japanese Restaurant
            </Text>
            <Text style={styles.textMid}>
              Lum Pini, Prathum Wan
            </Text>
            <Text style={styles.textMid}>
              Open Today 10:00 - 22:00
            </Text>
            <Text style={styles.textBookmark}>
              Bookmark
            </Text>
            <Text style={styles.textRating}>
              Rating 9.3
            </Text>
          </View>
        </Image>
        <Text style={styles.textHeadline}>What's good?</Text>
        <Text style={styles.textList}>Spicy Tuna Maki</Text>
        <Text style={styles.textList}>Maguro Tataki Salad</Text>
        <Text style={styles.textList}>Salmon Salad</Text>
        <Text style={styles.textList}>Alburi Salad</Text>
      </ScrollView>
    );
  }
})
 

 
module.exports = Place;