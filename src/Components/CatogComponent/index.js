import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import {Surface} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';
import categories from '../../Data/categories';

export default class CatogComponent extends Component {
  constructor(props) {
    super(props);
  }

  goToDetails = (item) => {
    this.props.navigation.navigate('Details', {item});
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Categories</Text>
        <FlatList
          data={categories}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <TouchableWithoutFeedback onPress={() => this.goToDetails(item)}>
                <Surface style={styles.surface}>
                  <ImageBackground
                    source={item.img}
                    style={styles.img}
                    blurRadius={3}>
                    <Icon name="music" color="#fff" size={22} />
                    <Text style={styles.name}>{item.name}</Text>
                  </ImageBackground>
                </Surface>
              </TouchableWithoutFeedback>
            );
          }}
        />
      </View>
    );
  }
}
