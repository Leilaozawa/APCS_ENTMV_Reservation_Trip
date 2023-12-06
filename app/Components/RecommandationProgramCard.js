import React from 'react';
import { FlatList, View, Text, StyleSheet, Dimensions } from 'react-native';

const RecommandationProgramCard = () => {
    const programs = [
        { name: "BADJI MOKHTAR I", date: "28/11/2023" },
        { name: "BADJI MOKHTAR II", date: "29/11/2023" },
        { name: "BADJI MOKHTAR III", date: "30/11/2023" },
        { name: "BADJI MOKHTAR IV", date: "01/12/2023" },
        { name: "BADJI MOKHTAR V", date: "13/11/2023" }
    ];

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.listStyle}
                keyExtractor={(key) => key.name}
                horizontal
                data={programs}
                renderItem={({ item }) => {
                    console.log(item.date, item.name);
                    return (
                        <View style={styles.itemContainer}>
                            <Text style={styles.textNameStyle}>{item.name}</Text>
                            <Text style={styles.textDateStyle}>{item.date}</Text>
                        </View>
                    );
                }}
            />
        </View>
    );
};

export default RecommandationProgramCard;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom:20,
        marginRight:10,
        marginLeft:10,
        borderRadius: 10,
        height: 'auto', 
        backgroundColor: '#DEEFFF',
        padding: 10,
    },
    listStyle: {
        flexGrow: 0, // Prevent the FlatList from taking up extra space
    },
    itemContainer: {
        backgroundColor: '#0F387A',
        borderRadius: 10,
        marginRight: 10, // Spacing between items
        marginBottom: 5, // Spacing between name and date
        overflow: 'hidden', // Clip content that goes beyond the rounded corners
        alignItems: 'center',
        justifyContent: 'center',
    },
    textNameStyle: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingRight: 10,
        paddingLeft: 10,
    },
    textDateStyle: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
        paddingBottom:10,
        paddingLeft: 10,
        paddingRight: 10,
        
    },
});


