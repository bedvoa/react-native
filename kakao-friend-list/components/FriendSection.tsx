import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

const FriendSection = (props: {
  friendPropfileLen: number;
  onPressArrow: () => void;
  isOpened: boolean;
}) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text>친구 {props.friendPropfileLen}</Text>
      <TouchableOpacity onPress={props.onPressArrow}>
        <MaterialIcons
          name={props.isOpened ? "keyboard-arrow-up" : "keyboard-arrow-down"}
          size={24}
          color="lightgrey"
        />
      </TouchableOpacity>
    </View>
  );
};

export default FriendSection;
