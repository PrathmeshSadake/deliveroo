import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        text="Delivery"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

const HeaderButton = ({ text, setActiveTab, activeTab }) => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 30,
        paddingVertical: 6,
        paddingHorizontal: 16,
        backgroundColor: activeTab === text ? "black" : "white",
      }}
      onPress={() => setActiveTab(text)}
    >
      <Text
        style={{
          color: activeTab === text ? "white" : "black",
          fontWeight: "900",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default HeaderTabs;
