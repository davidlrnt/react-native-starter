'use strict'

import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ActivityIndicatorIOS,
  TouchableOpacity
} from 'react-native'

class ImagesList extends React.Component {
  render() {
    console.log("this.props", this.props);
    return (
      <View style={styles.container}>
        {
          this.props.images.map((image, i) => {
            console.log(i);
            if (i<20){
              // return(
              //   <Image
              //     key={i}
              //     style={styles.logo}
              //     source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
              //   />                
              // )
              return (
                <Image
                    key={i}
                    style={styles.logo}
                    source={{uri: image.media[0].tinygif.url}} />
              )
            }
          })
        }
      </View>
    )
  }
}

ImagesList.propTypes = {
  images: React.PropTypes.array.isRequired,
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F1F1F1',
    flexWrap: 'wrap',
    borderColor: "black",
    borderWidth: 1,
    paddingTop: 100,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20
  },
  logo: {
    width: 50,
    height: 50,
    margin: 15,
    // alignSelf: 'center'
  },
  searchInput: {
    height: 60,
    padding: 10,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    marginBottom: 20
  },
  info: {
    marginBottom: 10
  },
  step: {
    marginBottom: 5
  },
  preloader: {
    marginBottom: 20
  },
  error: {
    fontSize: 15,
    color: 'red',
    marginBottom: 20,
    alignSelf: 'center'
  }
})

export default ImagesList