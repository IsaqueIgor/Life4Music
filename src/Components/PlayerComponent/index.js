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
import Icon from 'react-native-vector-icons/AntDesign';
import {Surface} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import {Slider} from 'react-native-elements';

Icon.loadFont();

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

  render() {
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
                <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}>
                  <Icon name="play" size={30} color="#fff" />
                </LinearGradient>
              </TouchableOpacity>
            </View>

            <Text style={styles.text}>Queue</Text>
          </View>
        </ScrollView>
      </View>
    );
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
    height: 40,
    width: 40,
    borderRadius: 25,
    backgroundColor: '#6C2FD3',
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
