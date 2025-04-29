import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const DocumentsScreen = () => {
    const documents = [
        { id: '1', name: 'Document 1' },
        { id: '2', name: 'Document 2' },
        { id: '3', name: 'Document 3' },
    ];

    const handleDocumentPress = (document) => {
        console.log(`Selected document: ${document.name}`);
    };

    const renderDocumentItem = ({ item }) => (
        <TouchableOpacity style={styles.documentItem} onPress={() => handleDocumentPress(item)}>
            <Text style={styles.documentText}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Manage Documents</Text>
            <FlatList
                data={documents}
                keyExtractor={(item) => item.id}
                renderItem={renderDocumentItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f8f9fa',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    documentItem: {
        padding: 16,
        marginVertical: 8,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    documentText: {
        fontSize: 16,
    },
});

export default DocumentsScreen;