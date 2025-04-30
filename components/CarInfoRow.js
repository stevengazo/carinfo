import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CarInfoRow({ items }) {
  return (
    <View style={styles.row}>
      {items.map((item, index) => (
        <Text style={styles.rowItem} key={index}>{item}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  rowItem: {
    flex: 1,
    fontSize: 16,
    color: "#555",
    textAlign: "center",
  },
});
