'use strict';
 
var React = require('react-native');
var Place = require('./Place');

var {
  Alert,
  StyleSheet,
  Image,
  ScrollView,
  View,
  Text,
  Component,
  TouchableHighlight,
} = React;

var alertMessage = 'Credibly reintermediate next-generation potentialities after goal-oriented ' +
                   'catalysts for change. Dynamically revolutionize.';
 
var styles = StyleSheet.create({
  body: {
    alignSelf: "stretch",
  },
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
  },
  item: {
    flexDirection: 'row',
    alignSelf: "stretch",
    width: 420,
  },
  itemView: {
    width: 420,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(10,10,10,0.6)'
  },
  itemBackground: {
    width: 420,
    height: 200,
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
    color: '#FFFFFF',
    fontSize: 13,
  },
  textBookmark: {
    color: '#76D7C4',
    position: 'absolute',
    left: 15,
    top: 10,
  },
  textRating: {
    color: '#F1C40F',
    position: 'absolute',
    right: 15,
    top: 10,
  },
});
 
class Nearby extends Component {
  constructor() {
      super();

    }
  goDerper() {
    this.props.navigator.push({
               title: 'Tajima',
               component: Place,
           });
  }

  render() {

    return (
      <View style={styles.container}>
        <ScrollView style={styles.body}>

          <TouchableHighlight
            style={styles.item}
            onPress={() => this.goDerper()}
            underlayColor='rgba(0,0,0,0)'>
              <Image source={require('./Assets/Places/place-1.png')} style={styles.itemBackground}>
                <View style={styles.itemView}>
                  <Text style={styles.textBookmark}>
                    Bookmark
                  </Text>
                  <Text style={styles.textRating}>
                    Rating 9.3
                  </Text>
                  <Text style={styles.textLarge}>Tajima</Text>
                  <Text style={styles.textMid}>Japanese Restaurant</Text>
                  <Text style={styles.textSmall}>Lum Pini, Prathum Wan</Text>
                </View>
              </Image>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.item}
            onPress={() => this.goDerper()}
            underlayColor='rgba(0,0,0,0)'>
              <Image source={require('./Assets/Places/place-2.png')} style={styles.itemBackground}>
                <View style={styles.itemView}>
                  <Text style={styles.textBookmark}>
                    Bookmark
                  </Text>
                  <Text style={styles.textRating}>
                    Rating 9.3
                  </Text>
                  <Text style={styles.textLarge}>Osito</Text>
                  <Text style={styles.textMid}>Italian Restaurant</Text>
                  <Text style={styles.textSmall}>Ploen Chit</Text>
                </View>
              </Image>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.item}
            onPress={() => this.goDerper()}
            underlayColor='rgba(0,0,0,0)'>
              <Image source={require('./Assets/Places/place-3.png')} style={styles.itemBackground}>
                <View style={styles.itemView}>
                  <Text style={styles.textBookmark}>
                    Bookmark
                  </Text>
                  <Text style={styles.textRating}>
                    Rating 9.3
                  </Text>
                  <Text style={styles.textLarge}>Seed</Text>
                  <Text style={styles.textMid}>Contemporary Restaurant</Text>
                  <Text style={styles.textSmall}>Lum Pini, Prathum Wan</Text>
                </View>
              </Image>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.item}
            onPress={() => this.goDerper()}
            underlayColor='rgba(0,0,0,0)'>
              <Image source={require('./Assets/Places/place-4.png')} style={styles.itemBackground}>
                <View style={styles.itemView}>
                  <Text style={styles.textBookmark}>
                    Bookmark
                  </Text>
                  <Text style={styles.textRating}>
                    Rating 9.3
                  </Text>
                  <Text style={styles.textLarge}>Chu Bu</Text>
                  <Text style={styles.textMid}>Japanese Restaurant</Text>
                  <Text style={styles.textSmall}>Lum Pini, Prathum Wan</Text>
                </View>
              </Image>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.item}
            onPress={() => this.goDerper()}
            underlayColor='rgba(0,0,0,0)'>
              <Image source={require('./Assets/Places/place-5.png')} style={styles.itemBackground}>
                <View style={styles.itemView}>
                  <Text style={styles.textBookmark}>
                    Bookmark
                  </Text>
                  <Text style={styles.textRating}>
                    Rating 9.3
                  </Text>
                  <Text style={styles.textLarge}>Glam</Text>
                  <Text style={styles.textMid}>Contemporary Restaurant</Text>
                  <Text style={styles.textSmall}>Lum Pini, Prathum Wan</Text>
                </View>
              </Image>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.item}
            onPress={() => this.goDerper()}
            underlayColor='rgba(0,0,0,0)'>
              <Image source={require('./Assets/Places/place-7.png')} style={styles.itemBackground}>
                <View style={styles.itemView}>
                  <Text style={styles.textBookmark}>
                    Bookmark
                  </Text>
                  <Text style={styles.textRating}>
                    Rating 9.3
                  </Text>
                  <Text style={styles.textLarge}>Cafetaria</Text>
                  <Text style={styles.textMid}>Comtemporary Restaurant</Text>
                  <Text style={styles.textSmall}>Lum Pini, Prathum Wan</Text>
                </View>
              </Image>
          </TouchableHighlight>

        </ScrollView>
      </View>
    );
  }
}
 
module.exports = Nearby;