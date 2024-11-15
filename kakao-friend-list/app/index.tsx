import Header from "@/components/Header";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default index;
