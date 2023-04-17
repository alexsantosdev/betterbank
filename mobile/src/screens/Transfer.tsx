import { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import { Select } from 'native-base'

import { AlertMessage } from '../components/AlertMessage'

import GoBack from '../assets/go-back.svg'
import { useNavigation } from '@react-navigation/native'
import { useAuth } from '../hooks/useAuth'
import { Button } from '../components/Button'

export function Transfer() {

    const { user } = useAuth()
    const { navigate } = useNavigation()

    const [amount, setAmount] = useState('')

    const EmptyBoxSpace = () => <View style={{width: 6, height: 6}} />

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.box}>
                <View style={styles.header}>
                    <TouchableOpacity testID='test:id/goback_button' onPress={() => navigate('dashboard')}>
                        <GoBack />
                    </TouchableOpacity>
                    <Text style={{color: '#29292e', fontSize: 16}}>Transferir</Text>
                    <EmptyBoxSpace />
                </View>
                <View style={styles.transferContainer}>
                    <Text style={styles.transferContainerTitle}>Quanto vai transferir?</Text>
                    <View style={styles.amountContainer}>
                        <Text style={styles.amountContainerText}>R$</Text>
                        <TextInput testID='test:id/amount' style={styles.amountContainerInput} value={amount} onChangeText={text => setAmount(text)} />
                    </View>
                    <Text style={{color: '#858585', marginTop: 8}}>
                        Disponível: <Text style={{fontWeight: '500'}}>R$ {user.balance}</Text>
                    </Text>
                    {
                        Number(amount) > user.balance && 
                        <AlertMessage
                        message='O valor da transferência não pode ser superior ao saldo disponível'
                        />
                    }
                    <Text style={[styles.transferContainerTitle, {marginTop: 40}]}>Quanto o tipo de transferência?</Text>
                    <Select placeholder='Selecione o tipo de transferência' marginTop={8} padding={5}>
                        <Select.Item label='Pix' value='pix' />
                        <Select.Item label='TED' value='ted' />
                        <Select.Item label='DOC' value='doc' />
                    </Select>
                    <Text style={[styles.transferContainerTitle, {marginTop: 40}]}>Para quem você vai transferir?</Text>
                    <TextInput style={{borderWidth: 1, marginTop: 20, borderRadius: 5, borderColor: '#858585', padding: 20}} placeholder='Informe a conta' />
                    <Button title='Transferir' style={{marginTop: 20}} />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    box: {
        padding: 20,
        flex: 1
    },
    header: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    transferContainer: {
        flex: 1,
        marginTop: 40
    },
    transferContainerTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: '#858585'
    },
    amountContainer: {
        flexDirection: 'row',
        gap: 8,
        marginTop: 20,
        alignItems: 'center'
    },
    amountContainerText: {
        fontSize: 20,
        fontWeight: '500'
    },
    amountContainerInput: {
        fontSize: 32,
        flex: 1,
        height: 40,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#CBCBCB'
    }
})