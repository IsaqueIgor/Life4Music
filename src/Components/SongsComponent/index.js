import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, FlatList} from 'react-native';
const {width, height} = Dimensions.get('window');

import songs from '../../Data/songs';
import SongData from './songData';

export default class SongsComponent extends Component {
  constructor(props) {
    super(props);
  }

  separator = () => {
    return <View style={{height: 10, backgroundColor: '#fff'}} />;
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{padding: 10, paddingTop: 0}}>
          <FlatList
            data={songs}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => this.separator()}
            renderItem={({item}) => {
              return (
                <SongData item={item} navigation={this.props.navigation} />
              );
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
  },
});
