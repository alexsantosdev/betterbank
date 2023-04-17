import { createContext, ReactNode, useState } from  'react'

interface UserTransactions {
    transactionType: string;
    transactionTitle: string;
    transactionDate: string;
    transactionAmount: number;
}

interface UserProps {
    name: string;
    balance: number;
    transactions: UserTransactions[]
}

export interface AuthContextDataProps {
    user: UserProps;
    isUserLogged: boolean;
    isUserLoading: boolean;
    signIn: () => Promise<void>;
    signOut: () => Promise<void>;
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextDataProps)

export function AuthContextProvider({ children }: AuthProviderProps) {

    const [isUserLogged, setIsUserLogged] = useState(true)
    const [isUserLoading, setIsUserLoading] = useState(false)
    const [user, setUser] = useState<UserProps>({} as UserProps)

    async function signIn() {
        setIsUserLoading(true)
        
        if(isUserLogged) {
            setUser({
                name: 'Tester',
                balance: 375.60,
                transactions: [
                    {
                        transactionType: 'departure',
                        transactionTitle: 'Pão de açucar',
                        transactionDate: `${Math.floor(Math.random() * 20)}/${new Date().getMonth().toLocaleString('default')}/${new Date().getFullYear()}`,
                        transactionAmount: 224.40
                    },
                    {
                        transactionType: 'departure',
                        transactionTitle: 'Carrefour',
                        transactionDate: `${Math.floor(Math.random() * 20)}/${new Date().getMonth().toLocaleString('default')}/${new Date().getFullYear()}`,
                        transactionAmount: 182.35
                    },
                    {
                        transactionType: 'entry',
                        transactionTitle: 'Transferência Pix',
                        transactionDate: `${Math.floor(Math.random() * 20)}/${new Date().getMonth().toLocaleString('default')}/${new Date().getFullYear()}`,
                        transactionAmount: 782.35
                    }
                ]
            })
        }
        setIsUserLoading(false)
    }

    async function signOut() {
        setUser({} as UserProps)
    }

    return(
        <AuthContext.Provider value={{
            signIn,
            signOut,
            isUserLogged,
            isUserLoading,
            user,
        }}>
            {children}
        </AuthContext.Provider>
    )
}