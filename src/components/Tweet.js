import React, { Component } from 'react';
import api from '../services/api';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

class Tweet extends Component {
  likeHandler = () => {
    const { _id } = this.props.tweet;

    api.put(`/likes/${_id}`);
  };

  render() {
    const { tweet } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.author}>{tweet.author}</Text>
        <Text style={styles.content}>{tweet.content}</Text>

        <TouchableOpacity onPress={this.likeHandler} style={styles.likeButton}>
          <Icon name="ios-heart-empty" size={20} color="#999" />
          <Text style={styles.likeText}>{tweet.likes}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#eee'
  },

  author: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1C2022'
  },

  content: {
    fontSize: 15,
    lineHeight: 20,
    color: '#1C2022',
    marginVertical: 10
  },

  likeButton: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  likeText: {
    color: '#999',
    marginLeft: 5
  }
});

export default Tweet;
