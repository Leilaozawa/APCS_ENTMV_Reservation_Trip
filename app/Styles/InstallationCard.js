
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerWithHiddenSection: {
        flex: 1,
        flexDirection: 'column'
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 150,
        marginTop: 20,
        marginLeft: 20,
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    disponibilite: {},
    installationImageContainer: {
        marginLeft: 10,
        marginRight: 10,
    },
    details: {
        width: 130,
    },
    selectedView: {
        flexDirection: 'row',
        marginLeft: 20,
    },
});
