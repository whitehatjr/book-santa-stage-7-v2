import React from "react";
import { View } from "react-native";
import { Header, Icon, Badge } from "react-native-elements";
import { StyleSheet } from "react-native";

const BellIconWithBadge = props => {
  return (
    <View>
      <Icon
        name={"bell"}
        type={"font-awesome"}
        color={"#696969"}
        size={25}
        onPress={() => props.navigation.navigate("Notifications")}
      />
      <Badge value={"1"} containerStyle={styles.badgeContainer} />
    </View>
  );
};

const MyHeader = props => {
  return (
    <Header
      leftComponent={
        <Icon
          name={"bars"}
          type={"font-awesome"}
          color={"#696969"}
          onPress={() => props.navigation.toggleDrawer()}
        />
      }
      centerComponent={{
        text: props.title,
        style: styles.title
      }}
      rightComponent={<BellIconWithBadge {...props} />}
      backgroundColor={"#6fc0b8"}
    />
  );
};

export default MyHeader;

const styles = StyleSheet.create({
  title: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold"
  },
  badgeContainer: {
    position: "absolute",
    top: -4,
    right: -4
  }
});
