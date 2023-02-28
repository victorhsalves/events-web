import { createContext, ReactNode, useEffect, useState } from "react";
import Cookies from "js-cookie";
import jwt from 'jwt-decode';

type UserContextProps = {
    children: ReactNode
}

type UserContextType = {
    signed: boolean,
    user: UserType | null,
    loadingUser: boolean,
    signIn(token: string): Promise<void>,
    signOut(): Promise<void>
}

export type UserType = {
    exp: number,
    iat: number,
    name: string,
    profile: string,
    supervisor: string,
    username: string,
    token: string,
}

export const UserContext = createContext<UserContextType>({} as UserContextType);


export const UserContextProvider = ({ children }: UserContextProps) => {

    const [user, setUser] = useState<UserType | null>(null);
    const [loadingUser, setLoadingUser] = useState<boolean>(true);

    async function signIn(token: string) {
        const userStorage: UserType = jwt(token);
        setUser({ ...userStorage, token: token });

        localStorage.setItem('auth:user', JSON.stringify(userStorage));
        localStorage.setItem('auth:token', token);
    }

    async function signOut() {
        localStorage.clear();
        setUser(null);
    }

    useEffect(() => {
        async function loadStorageData() {
            const storagedUser = localStorage.getItem('auth:user');
            const storagedToken = localStorage.getItem('auth:token');
            // simular uma lentidão para mostar o loading.
            await new Promise((resolve) => setTimeout(resolve, 3000));

            if (storagedToken && storagedUser) {
                setUser({...JSON.parse(storagedUser), token: storagedToken});
            }
            setLoadingUser(false);
        }

        loadStorageData();
    },[localStorage.getItem('auth:token')])

    return (
        <UserContext.Provider value={{ signed: !!user, user, loadingUser, signIn , signOut }}>
            {children}
        </UserContext.Provider>
    )
}