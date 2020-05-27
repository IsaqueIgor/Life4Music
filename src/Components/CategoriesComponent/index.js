import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Surface} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SongsComponent from '../SongsComponent';

import styles from './styles';

export default class CategoriesDetails extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let data = this.props.route.params.item;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Surface style={styles.surface}>
            <Image source={data.img} style={styles.img} />
          </Surface>
          <Text style={styles.title}>{data.name}</Text>
          <View style={styles.playContainer}>
            <Text style={styles.text}>Play All</Text>
            <TouchableOpacity style={styles.btn}>
              <Icon name="play" size={30} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.text2}>Songs</Text>
        <SongsComponent navigation={this.props.navigation} />
      </View>
    );
  }
}
