import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const AddCarScreen = () => {
  const [formData, setFormData] = useState({
    year: '',
    model: '',
    brand: '',
    mileage: '',
    plate: '',
    dekra: '',
    doors: '',
    transmission: '',
    color: '',
    engine: '',
    vin: '',
  });

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = () => {
    console.log('Datos del vehículo:', formData);
    // Aquí puedes enviar los datos a una API o validarlos
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Formulario de Registro de Vehículo</Text>
        {[
          ['Año', 'year'],
          ['Modelo', 'model'],
          ['Marca', 'brand'],
          ['Kilometraje', 'mileage'],
          ['Placa', 'plate'],
          ['Dekra (Vencimiento)', 'dekra'],
          ['Puertas', 'doors'],
          ['Transmisión', 'transmission'],
          ['Color', 'color'],
          ['Tipo de Motor', 'engine'],
          ['VIN', 'vin'],
        ].map(([label, key], index) => (
          <View key={index} style={styles.inputGroup}>
            <Text style={styles.label}>{label}:</Text>
            <TextInput
              style={styles.input}
              value={formData[key]}
              onChangeText={(text) => handleChange(key, text)}
              placeholder={`Ingrese ${label.toLowerCase()}`}
            />
          </View>
        ))}

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Registrar Vehículo</Text>
        </TouchableOpacity>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f2f2f2',
    flexGrow: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 30,
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default AddCarScreen;
