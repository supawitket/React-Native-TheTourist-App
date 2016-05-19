/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
var Search = require('./Search');
var Bookmarks = require('./Bookmarks');
var More = require('./More');
var Favorites = require('./Favorites');

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';

class devdactic_tabs extends Component {
  constructor(props) {
      super(props);
      this.state = {
        selectedTab: 'search'
      };
    }

  render() {
    return (
        <TabBarIOS 
          selectedTab={this.state.selectedTab}
          tintColor={'#C70039'}
          barTintColor={'#FFFFFF'}
        >

          <TabBarIOS.Item
            selected={this.state.selectedTab === 'search'}
            systemIcon="search"
            iconSize={20}
            onPress={() => {
                this.setState({
                    selectedTab: 'search',
                });
            }}>
              
            <Search/>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            selected={this.state.selectedTab === 'bookmarks'}
            systemIcon="bookmarks"
            iconSize={20}
            onPress={() => {
                this.setState({
                    selectedTab: 'bookmarks',
                });
            }}>
              <Bookmarks/>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            selected={this.state.selectedTab === 'favorites'}
            systemIcon="favorites"
            iconSize={20}
            onPress={() => {
                this.setState({
                    selectedTab: 'favorites',
                });
            }}>
              <Favorites/>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            selected={this.state.selectedTab === 'more'}
            systemIcon="more"
            iconSize={20}
            onPress={() => {
                this.setState({
                    selectedTab: 'more',
                });
            }}>
              <More/>
          </TabBarIOS.Item>
        </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('devdactic_tabs', () => devdactic_tabs);
