import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

type IconProps = {
  name:
    | "search-outline"
    | "person-add-outline"
    | "musical-notes-outline"
    | "settings-outline";
};

const IconButton = (props: IconProps) => {
  return (
    <View style={{ paddingHorizontal: 6 }}>
      <Ionicons name={props.name} size={24} color="black" />
    </View>
  );
};

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>친구</Text>
      <View style={{ flexDirection: "row" }}>
        <IconButton name={"search-outline"} />
        <IconButton name={"person-add-outline"} />
        <IconButton name={"musical-notes-outline"} />
        <IconButton name={"settings-outline"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default Header;
