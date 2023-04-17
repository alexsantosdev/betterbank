import { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { Input, useToast } from 'native-base'

import { useAuth } from '../hooks/useAuth'

import { Button } from '../components/Button'

import Logo from '../assets/logo.svg'

export function SignIn() {
    const { signIn, isUserLoading } = useAuth()

    const toast = useToast()

    const [account, setAccount] = useState('')

    const handleSignIn = () => {
        if(account.trim() === '') {
            return toast.show({
                description: 'Conta inválida ou não encontrada.'
            })
        }

        if(account === '123456') {
            signIn()
        }else {
            toast.show({
                description: 'Não conseguimos localizar essa conta.'
            })
        }
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.box}>
                <Logo />
                <Text style={styles.headerText}>
                    Controle suas <Text style={styles.highlightText}>Finanças</Text>, 
                    sua <Text style={styles.highlightText}>carteira</Text> e suas 
                    <Text style={styles.highlightText}> despesas</Text> com <Text style={styles.highlightText}>BetterBank</Text>.
                </Text>
                <View>
                    <Input testID='test:id/user_account' padding={5} placeholder='Informe sua conta' marginBottom={5} borderRadius={50} value={account} onChangeText={text => setAccount(text)} isRequired />
                    <Button testID='test:id/login_button' id='login_button' title='Acessar' onPress={() => handleSignIn()} isLoading={isUserLoading} _loading={{_spinner: {color: 'white'}}} />
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
        flex: 1,
        justifyContent: 'center',
        gap: 40
    },
    headerText: {
        fontSize: 26,
        fontWeight: '500'
    },
    highlightText: {
        color: '#3156ED'
    }
})