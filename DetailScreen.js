import React from "react";
import { View, Text, Button } from "react-native";

export default class DetailsScreen extends React.Component {
  static navigationOptions = (props) => {
    console.log('>>', props);

    return {
      title: 'Details',
    };
  };

  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details', { itemId: Math.floor(Math.random() * 100)})}
        />
        <Button
          title="Popping to Top"
          onPress={() => this.props.navigation.popToTop()}
        />
      </View>
    );
  }
}
