
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        paddingLeft: 24,
        paddingRight: 24,
    },
    contentInput: {
        width: '100%',
        marginTop: 32,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        height: 56,
        fontSize: 16, 
        marginRight: 8,
        borderRadius: 5,
        color: '#fdfcfe',
        paddingHorizontal: 16,
        backgroundColor: '#1f1e25',
    },
    button:{
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31CF67',
        justifyContent: 'center',
        alignContent: 'center'
    },
    textButton: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    title: {
        fontSize: 20, 
        marginTop: 44,
        marginBottom: 16,
        color: '#fdfcfe',
        fontWeight: '700',
    },
    listEmptyText:{
        fontSize: 14, 
        color: '#fff',
        textAlign: 'center',
    }
});