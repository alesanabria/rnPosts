import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Comment extends PureComponent {

  render() {
    const { comment } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.body}>{comment && comment.body}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    paddingTop: 22,
    paddingBottom: 8,
    paddingHorizontal: 16
  },
  body: {
    color: '#8E8E8E',
    fontSize: 16
  }
});

export default Comment;