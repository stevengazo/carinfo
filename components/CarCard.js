import { TouchableOpacity } from "react-native";
import { View, Text, Image, StyleSheet } from "react-native";
import CarInfoRow from "./CarInfoRow.js";

export default function CarCard({ car, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={styles.card}>
        <Image source={{ uri: car.image }} style={styles.carImage} />
        <Text style={styles.carTitle}>{car.title}</Text>

        <View style={styles.infoContainer}>
          {car.info.map((row, index) => (
            <CarInfoRow key={index} items={row} />
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
    overflow: "hidden",
    width: "100%",
    alignSelf: "center",
    marginBottom: 20,
  },
  carImage: {
    width: "100%",
    height: 220,
    resizeMode: "cover",
  },
  carTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 15,
    marginBottom: 10,
    color: "#444",
  },
  infoContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
