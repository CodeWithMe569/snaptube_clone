import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

export default function Play() {
    return (
        <View style={styles.container}>

            <Text style={styles.heading}>Downloaded</Text>

            <View style={styles.icons}>
                <Text>Filter</Text>
                <Text>Delete</Text>
                <Text>Search</Text>
            </View>

            <View style={styles.list}>
                <FlatList />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    heading: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 3,
    }
});
