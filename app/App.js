'use strict'

import React from 'react';
import {
  View,
  Navigator,
  StyleSheet,
  Dimensions
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  fetchData,
} from './actions'
import ImagesList from './components/ImagesList'
import Button from './components/Button'

const {height, width} = Dimensions.get('window');

class App extends React.Component {
  constructor(props) {
    super(props)
    this.pressButton = this.pressButton.bind(this)
  }

  pressButton() {
    this.props.fetchData("https://api.riffsy.com/v1/search?tag=cat")
  }
  render() {
    return (
      <View style={styles.container}>
        <ImagesList data={this.props.fetch.data}/>
        <Button _onPressButton={this.pressButton} text="Fetch Data" color="#575D67"/>
      </View>
    )
  }
}

const stateToProps = (state) => {
  return {
    fetch: state.fetch
  }
}

const dispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchData,
  }, dispatch)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
})

export default connect(stateToProps, dispatchToProps)(App)
