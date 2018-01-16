import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';

export default class FlatListDemo extends Component<{}> {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false
    };
  }

  componentDidMount() {
    console.log( 'componentDidMount');
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({loading: true});
    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log( 'res: ', res );
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({error, loading: false});
      });
  };

  renderSeparator = () => {
      return (
        <View
          style={{
            height: 1,
            width: '86%',
            backgroundColor: 'blue',
            marginLeft: '14%',
          }}
        />
      );
  };

  renderHeader = () => {
    return <SearchBar placeholder="Type here..." lightTheme round />;
  }

  renderFooter = () => {
    if(!this.state.loading) return null;

    return (
      <View style={styles.footer}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  render() {
    return (
      <List containerStyle={ styles.listContainer }>
        <FlatList
        style={styles.flatList}
          data={this.state.data}
          renderItem={({item}) => (
            <ListItem
              roundAvatar
              title={`${item.name.first} ${item.name.last}`}
              subtitle={item.email}
              avatar={{ uri: item.picture.thumbnail }}
              containerStyle={styles.listItemContainer}
            />
          )}
          keyExtractor={item => item.email}
          ListFooterComponent={this.renderFooter}
          ListHeaderComponent={this.renderHeader}
        />
      </List>
    );
  }
}

const styles = StyleSheet.create({
  flatList: {

  },
  listItemContainer: {
    borderTopWidth: 0,
    borderBottomWidth: 0
  },
  listContainer: {
    borderTopWidth: 0,
    borderBottomWidth: 0,
    marginBottom: 20
  },
  footer: {
    paddingVertical: 20,
    borderTopWidth: 1,
  }
})
