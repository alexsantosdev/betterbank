import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HouseSimple, User } from 'phosphor-react-native'
import { useTheme } from 'native-base'
import { Platform } from 'react-native'

import { Dashboard } from '../screens/Dashboard'
import { Profile } from '../screens/Profile'
import { Transfer } from '../screens/Transfer'

const { Navigator, Screen } = createBottomTabNavigator()

export function AppRoutes() {
    const { colors, sizes } = useTheme()
    const size = sizes[6]

    return(
        <Navigator screenOptions={{
            headerShown: false,
            tabBarLabelPosition: 'beside-icon',
            tabBarActiveTintColor: colors.blue[500],
            tabBarInactiveTintColor: colors.blue[100],
            tabBarStyle: {
                position: 'absolute',
                height: sizes[22],
                // borderTopWidth: 0,
            },
            tabBarItemStyle: {
                position: 'relative',
                top: Platform.OS === 'android' ? -10 : 0
            }
        }}>
            <Screen
                name='dashboard'
                component={Dashboard}
                options={{
                    tabBarIcon: ({ color }) => <HouseSimple color={color} size={size} />,
                    tabBarLabel: 'Início'
                }}
            />

            <Screen
                name='profile'
                component={Profile}
                options={{
                    tabBarIcon: ({ color }) => <User color={color} size={size} />,
                    tabBarLabel: 'Perfil'
                }}
            />

            <Screen
                name='transfer'
                component={Transfer}
                options={{
                    tabBarButton: () => null
                }}
            />
        </Navigator>
    )
}