import React from "react";
import { ScrollView, View } from "react-native";
import MyPage from "./MyPage";
import Margin from "./Margin";

type Friend = {
  uri: string;
  name: string;
  introduction: string;
};

const FriendList = (props: { data: Friend[]; isOpened: boolean }) => {
  if (!props.isOpened) return null;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {props.data.map((item, index) => {
        return (
          <View>
            <MyPage
              key={index}
              uri={item.uri}
              name={item.name}
              introduction={item.introduction}
            />
            <Margin height={13} />
          </View>
        );
      })}
    </ScrollView>
  );
};

export default FriendList;
