import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons"; // Necesitas instalar `expo/vector-icons` si no lo tienes
import { ScrollView } from "react-native-gesture-handler";

export default function HomeScreen({ navigation }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <Text style={styles.title}></Text>

          <View style={styles.card}>
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/6/69/BMW320i_E46_Lim.jpg",
              }}
              style={styles.carImage}
            />

            <Text style={styles.carTitle}>BMW - E46 Sedan</Text>

            <View style={styles.infoContainer}>
              {/* Primera fila */}
              <View style={styles.row}>
                <Text style={styles.rowItem}>Año: 2001</Text>
                <Text style={styles.rowItem}>Modelo: E46 Sedan</Text>
              </View>

              {/* Segunda fila */}
              <View style={styles.row}>
                <Text style={styles.rowItem}>Marca: BMW</Text>
                <Text style={styles.rowItem}>Kilometraje: 264,456 km</Text>
              </View>

              {/* Tercera fila */}
              <View style={styles.row}>
                <Text style={styles.rowItem}>Placa: ABC-1234</Text>
                <Text style={styles.rowItem}>Dekra: 20/03/2025</Text>
              </View>

              {/* Cuarta fila */}
              <View style={styles.row}>
                <Text style={styles.rowItem}>Puertas: 4</Text>
                <Text style={styles.rowItem}>Transmisión: Automática</Text>
              </View>

              {/* Quinta fila */}
              <View style={styles.row}>
                <Text style={styles.rowItem}>Color: Gris Titanio</Text>
                <Text style={styles.rowItem}>Tipo de Motor: 3.0L I6</Text>
              </View>

              {/* Sexta fila */}
              <View style={styles.row}>
                <Text style={styles.rowItem}>VIN: WBAEV53411KM12345</Text>
              </View>
            </View>
          </View>

          {/* Botón flotante */}
          <TouchableOpacity
            style={styles.fab}
            onPress={() => setMenuOpen(!menuOpen)}
          >
            <Ionicons
              name={menuOpen ? "close" : "menu"}
              size={30}
              color="#fff"
            />
          </TouchableOpacity>

          {/* Menú desplegable */}
          {menuOpen && (
            <View style={styles.menu}>
  
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => {
                  setMenuOpen(false);
                  navigation.navigate("AddCar");
                }}
              >
                <Text style={styles.menuText}>Agregar Auto</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8ecf4", // Fondo más claro y moderno
    width: "95%",
    alignSelf: "center",
    height: "100",
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    textAlign: "center",
   
    color: "#333",
  },
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
  },
  carImage: {
    width: "100%",
    height: 220,
    resizeMode: "cover", // Se adapta mejor al espacio
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
  fab: {
    position: "absolute",
    right: 20,
    bottom: 30,
    backgroundColor: "#007bff",
    width: 65,
    height: 65,
    borderRadius: 32.5,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 6,
  },
  menu: {
    position: "absolute",
    right: 20,
    bottom: 110,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 18,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  menuItem: {
    paddingVertical: 12,
  },
  menuText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
  },
});
