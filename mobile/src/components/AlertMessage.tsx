import { View, StyleSheet, Text } from 'react-native'

import AlertIcon from '../assets/alert.svg'

type AlertMessageProps = {
    message: string
}

export function AlertMessage({ message }: AlertMessageProps) {
    return(
        <View style={styles.container} testID='test:id/alert_message'>
            <AlertIcon />
            <Text style={styles.message}>{message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
        marginVertical: 7
    },
    message: {
        flexWrap: 'wrap',
        fontSize: 16,
        color: '#E07371'
    }
})