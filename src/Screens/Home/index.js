import React, {Component} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';

import Banner from '../../Components/BannerComponent';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Life4Music</Text>
        <ScrollView>
          <Banner navigation={this.props.navigation} />
          <Text style={[styles.title, {marginTop: 0}]}>Songs</Text>
        </ScrollView>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    margin: 10,
    marginLeft: 15,
  },
});
