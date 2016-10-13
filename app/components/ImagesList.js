'use strict'

import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ListView,
  StyleSheet,
  ActivityIndicatorIOS,
  TouchableOpacity
} from 'react-native'

class ImagesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    };
  }

  render() {
    return (
      <ListView contentContainerStyle={styles.container}
        dataSource={this.state.dataSource.cloneWithRows(this.props.data)}
        renderRow={(image) => <Image
                    style={styles.logo}
                    source={{uri: image.media[0].tinygif.url}} />}
        enableEmptySections
      /> 
    );
  }
}

export default ImagesList

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  logo: {
    width: 80,
    height: 80,
    margin: 15,
  },
})
