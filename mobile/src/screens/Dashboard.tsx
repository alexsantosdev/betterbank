import { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ArrowCircleDown, ArrowCircleUp } from 'phosphor-react-native'

import { useAuth } from '../hooks/useAuth'

import SignOut from '../assets/sign-out.svg'
import Hide from '../assets/hide.svg'
import Show from '../assets/show.svg'
import Deposit from '../assets/deposit.svg'
import Widthdraw from '../assets/withdraw.svg'

export function Dashboard() {
    const { user, signOut } = useAuth()
    const { navigate } = useNavigation()

    const [hideContent, setHideContent] = useState(false)

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.box}>
                <View style={styles.header}>
                    <Text style={styles.welcomeText}>Olá, {user?.name}.</Text>
                    <TouchableOpacity testID='test:id/signout_button' onPress={() => signOut()}>
                        <SignOut style={{width: 16, height: 16}} />
                    </TouchableOpacity>
                </View>
                <View style={styles.balanceBox}>
                    <Text style={{fontSize: 16, fontWeight: '500', color: '#858585'}}>Meu saldo</Text>
                    <View style={styles.balance}>
                        <Text style={{fontSize: 22, color: '#29292e', fontWeight: '500'}}>R$</Text>
                        <Text testID='test:id/user_balance' style={styles.amountText}>{hideContent ? '*****' : user?.balance}</Text>
                        <TouchableOpacity testID='test:id/hide_content' onPress={() => setHideContent(!hideContent)}>
                            {hideContent ? <Show /> : <Hide />}
                        </TouchableOpacity>
                    </View>
                    <View style={styles.actions}>
                        <TouchableOpacity testID='test:id/deposit_button' style={styles.actionButton}>
                            <Deposit />
                            <Text style={styles.actionText}>Despositar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity testID='test:id/transfer_button' style={styles.actionButton} onPress={() => navigate('transfer')} >
                            <Widthdraw />
                            <Text style={styles.actionText}>Transferir</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.transactionsContainer}>
                    <View style={styles.transactionsHeader}>
                        <Text style={{fontSize: 16, fontWeight: '500', color: '#858585'}}>Minhas transações</Text>
                        <TouchableOpacity>
                            <Text style={{fontSize: 14, color: '#3156ED'}}>Ver todas</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.transactionsBody}>
                        {
                            user?.transactions.map(t => {
                                return(
                                    <View key={t.transactionTitle} style={styles.transactionsItem}>
                                        <View style={styles.transactionsItemLeft}>
                                            <View style={styles.transactionsItemIcon}>
                                                {t.transactionType === 'departure' ? <ArrowCircleDown /> : <ArrowCircleUp />}
                                            </View>
                                            <View style={styles.transactionsItemLeftDetail}>
                                                <Text style={{fontSize: 14, fontWeight: '500', color: '#29292e'}}>{t.transactionTitle}</Text>
                                                <Text style={{fontSize: 12, fontWeight: '500', color: '#727278'}}>{t.transactionDate}</Text>
                                            </View>
                                        </View>
                                        {
                                            t.transactionType === 'departure' ?
                                            <Text style={styles.transactionDeparture}>-R$ {t.transactionAmount}</Text> :
                                            <Text style={styles.transactionEntry}>+R$ {t.transactionAmount}</Text>
                                        }
                                    </View>
                                )
                            })
                        }
                    </View>
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
    },
    header: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    welcomeText: {
        fontSize: 20,
        fontWeight: '500'
    },
    balanceBox: {
        marginTop: 40
    },
    balance: {
        flexDirection: 'row',
        marginVertical: 10,
        gap: 8,
        alignItems: 'center'
    },
    amountText: {
        fontSize: 48,
        fontWeight: '500'
    },
    actions: {
        flexDirection: 'row',
        gap: 8
    },
    actionButton: {
        paddingHorizontal: 12,
        paddingVertical: 7,
        backgroundColor: '#3156ED',
        flexDirection: 'row',
        gap: 8,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center'
    },
    actionText: {
        color: 'white'
    },
    transactionsContainer: {
        marginTop: 20,
        padding: 20,
        backgroundColor: '#F6F6F6',
        borderRadius: 10,
    },
    transactionsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    transactionsBody: {
        flexDirection: 'column',
        padding: 5
    },
    transactionsItem: {
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    transactionsItemLeft: {
        flexDirection: 'row',
        gap: 16,
        alignItems: 'center'
    },
    transactionsItemIcon: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 32
    },
    transactionsItemLeftDetail: {
        flexDirection: 'column',
    },
    transactionDeparture: {
        fontSize: 18,
        fontWeight: '500',
        color: '#E07371'
    },
    transactionEntry: {
        fontSize: 18,
        fontWeight: '500',
        color: '#5CA28A'
    }
})