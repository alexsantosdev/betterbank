import { NativeBaseProvider, StatusBar } from 'native-base'
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter'

import { AuthContextProvider } from './src/contexts/AuthContext'

import { Routes } from './src/routes'

import { Loading } from './src/components/Loading'

import { THEME } from './src/styles/theme'

export default function App() {
  let [fontsLoaded] = useFonts({ Inter_400Regular, Inter_500Medium, Inter_700Bold })

  return (
    <NativeBaseProvider theme={ THEME }>
      <AuthContextProvider>
        <StatusBar
          barStyle='dark-content'
          backgroundColor='transparent'
          translucent
        />
        { !fontsLoaded ? <Loading /> : <Routes /> }
      </AuthContextProvider>
    </NativeBaseProvider>
  )
}
