import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

export default class App extends React.Component {

  render() {
    return (
      <View>
        {
          this.props.items.map((todo, idx) =>
            <TouchableHighlight
              key={idx}
              onPress={() => this.props.onRemove(todo)}
            >
              <Text style={styles.todo}>
                - {todo}
              </Text>
            </TouchableHighlight>
          )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  todo: {
    marginBottom: 20
  },
});
