import React, { useState } from "react";
import Header from "@/components/Header";
import MyPage from "@/components/MyPage";
import Margin from "@/components/Margin";
import { friendProfiles, myProfile } from "@/data/data";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Division from "@/components/Division";
import FriendSection from "@/components/FriendSection";
import FriendList from "@/components/FriendList";

const index = () => {
  const [isOpened, setIsOpened] = useState(true);

  const onPressArrow = () => {
    setIsOpened(!isOpened);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={styles.container}
        edges={["right", "bottom", "left"]}
      >
        <Header />
        <Margin height={10} />
        <MyPage
          uri={myProfile.uri}
          name={myProfile.name}
          introduction={myProfile.introduction}
        />
        <Margin height={15} />
        <Division />
        <Margin height={12} />
        <FriendSection
          friendPropfileLen={friendProfiles.length}
          onPressArrow={onPressArrow}
          isOpened={isOpened}
        />
        <FriendList data={friendProfiles} isOpened={isOpened} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
  },
});

export default index;
