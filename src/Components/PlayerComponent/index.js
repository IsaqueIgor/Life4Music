import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Surface} from 'react-native-paper';
import {Slider} from 'react-native-elements';

const {width, height} = Dimensions.get('screen');

export default class PlayerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0.0,
      maxValue: 0.0,
    };
  }

  componentDidMount() {
    this.setState({
      maxValue: this.props.item.duration / 60,
    });
  }

  render(){
    return (
      <View style={styles.container}>
        <ScrollView>
            <View style={{height: height + 60}}>
              <Surface style={styles.surface}>
                <Image source={this.props.item.img} style={styles.img} />
              </Surface>
              <View style={styles.dataContainer}>
              <Text style={styles.title}>{this.props.item.title}</Text>
              <Text style={styles.subTitle}>{this.props.item.subTitle}</Text>
              <TouchableOpacity style={styles.btn}>
                <Icon name="play" size={30} color="#fff" />
              </TouchableOpacity>
            </View>

            <Text style={styles.text}>Queue</Text>
            </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  surface: {
    height: 200,
    width: 200,
    borderRadius: 10,
    elevation: 15,
    overflow: 'hidden',
    alignSelf: 'center',
    marginTop: 20,
  },
  img: {
    height: 200,
    width: 200,
  },
  dataContainer: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    color: 'gray',
  },
  btn: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#ff5b77',
    elevation: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actions: {
    width: '100%',
    height: 60,
    padding: 10,
    paddingTop: 0,
    // borderTopWidth: 0.5,
    // borderTopColor: 'gray',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  main: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    color: '#333333',
    margin: 10,
  },
});
