'use strict'

import React from 'react';
import {
  View,
  Text,
  Navigator,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  setSearchKeyword,
  runSearch,
  moreVideos,
  newSearch,
  fetchData,
} from './actions'
import Search from './components/Search'
import ImagesList from './components/ImagesList'
import Button from './components/Button'
 //       <Search
   //       error={this.props.search.error}
     //     keyword={this.props.search.keyword}
       //   isSearching={this.props.search.isSearching}
         // setSearchKeyword={this.props.setSearchKeyword}
          //runSearch={this.props.runSearch} />

class App extends React.Component {
  constructor(props) {
    super(props)
    this.testPress = this.testPress.bind(this)
  }

  testPress() {
    console.log("CLick");
    this.props.fetchData("https://api.riffsy.com/v1/search?tag=cat")
  }
  render() {
    return (
      <View style={styles.container}>
        <ImagesList data={this.props.fetch.data}/>
        <Button _onPressButton={this.testPress} text="Fetch Data" color="#575D67"/>
      </View>
    )
  }
}

const stateToProps = (state) => {
  return {
    search: state.search,
    fetch: state.fetch
  }
}

const dispatchToProps = (dispatch) => {
  return bindActionCreators({
    setSearchKeyword,
    runSearch,
    moreVideos,
    fetchData,
    newSearch,
  }, dispatch)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  navBar: {
    backgroundColor: 'white',
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarTitleText: {
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
  navBarRightButton: {
    paddingRight: 10,
  },
  scene: {
    flex: 1,
    paddingTop: 63,
  }
})

export default connect(stateToProps, dispatchToProps)(App)