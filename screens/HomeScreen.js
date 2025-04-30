import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { FlatList } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import CarCard from "../components/CarCard";
import FabMenu from "../components/FabMenu";

const { width } = Dimensions.get("window");

const cars = [
  {
    id: 1,
    title: "BMW - E46 Sedan",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/69/BMW320i_E46_Lim.jpg",
    info: [
      ["Año: 2001", "Modelo: E46 Sedan"],
      ["Marca: BMW", "Kilometraje: 264,456 km"],
      ["Placa: ABC-1234", "Dekra: 20/03/2025"],
      ["Puertas: 4", "Transmisión: Automática"],
      ["Color: Gris Titanio", "Tipo de Motor: 3.0L I6"],
      ["VIN: WBAEV53411KM12345"],
    ],
  },
  {
    id: 2,
    title: "Audi A4 B7",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Audi_A4_B9_Limousine_3.0_TDI_quattro.JPG/330px-Audi_A4_B9_Limousine_3.0_TDI_quattro.JPG",
    info: [
      ["Año: 2006", "Modelo: A4 B7"],
      ["Marca: Audi", "Kilometraje: 178,000 km"],
      ["Placa: XYZ-5678", "Dekra: 15/08/2024"],
      ["Puertas: 4", "Transmisión: Manual"],
      ["Color: Negro", "Tipo de Motor: 2.0 TFSI"],
      ["VIN: WAUZZZ8E86A123456"],
    ],
  },
  {
    id: 3,
    title: "Mercedes-Benz C200",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Mercedes-Benz_C-Class_timeline.jpg/800px-Mercedes-Benz_C-Class_timeline.jpg",
    info: [
      ["Año: 2004", "Modelo: C200 W203"],
      ["Marca: Mercedes-Benz", "Kilometraje: 210,000 km"],
      ["Placa: LMN-9012", "Dekra: 10/12/2025"],
      ["Puertas: 4", "Transmisión: Automática"],
      ["Color: Plata", "Tipo de Motor: 1.8L Kompressor"],
      ["VIN: WDBRF40J14A123456"],
    ],
  },
];

export default function HomeScreen({ navigation }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.container}>
            <Text style={styles.title}>Mis Autos</Text>
            <FlatList
              data={cars}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              pagingEnabled
              snapToAlignment="center"
              decelerationRate="fast"
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <View style={{ width }}>
                  <CarCard
                    car={item}
                    onPress={() =>
                      navigation.navigate("CarDetail", { car: item })
                    }
                  />
                </View>
              )}
            />
          </View>
        </ScrollView>

        {/* FabMenu fuera del ScrollView y con posición absoluta */}
        <FabMenu
          menuOpen={menuOpen}
          toggleMenu={() => setMenuOpen(!menuOpen)}
          onAddCar={() => {
            setMenuOpen(false);
            navigation.navigate("AddCar");
          }}
          style={styles.fab}
        />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8ecf4",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e8ecf4",
    alignSelf: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    textAlign: "center",
    marginVertical: 20,
    color: "#333",
  },
  card: {
    width: "80%",
    backgroundColor: "#3f51b5",
    marginHorizontal: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    overflow: "hidden",
    // otros estilos
  },
});
