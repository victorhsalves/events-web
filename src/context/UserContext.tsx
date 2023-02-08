import { createContext, ReactNode, useEffect, useState } from "react";
import Cookies from "js-cookie";
import jwt from 'jwt-decode';

type UserContextProps = {
    children: ReactNode
}

type UserContextType = {
    user: UserType,
    setUser: (newUser: UserType) => void
}

type UserType = {
    exp: number,
    iat: number,
    name: string,
    profile: string,
    supervisor: string,
    username: string,
    token: string,
}

const defaultValue = {
    user: {
        exp: 0,
        iat: 0,
        name: '',
        profile: '',
        supervisor: '',
        username: '',
        token: '',
    },
    setUser: () => { }
}

export const UserContext = createContext<UserContextType>(defaultValue);


export const UserContextProvider = ({ children }: UserContextProps) => {
    
    const [user, setUser] = useState<UserType>({
        exp: 0,
        iat: 0,
        name: '',
        profile: '',
        supervisor: '',
        username: '',
        token: ''
    });
    
    useEffect(() => {
        const token = Cookies.get('auth-token');
        
        if (token) {
            const userStorage: UserType = jwt(token);
            setUser({...userStorage, token: token});
        }
    }, [])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}