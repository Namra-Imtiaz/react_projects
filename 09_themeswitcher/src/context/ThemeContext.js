import {useContext,createContext} from 'react';

const ThemeContext=createContext({
    themeMode:'light',
    darkTheme:()=>{},
    lightTheme:()=>{}
})

export const ThemeProvider=ThemeContext.Provider //provider bana kar aik varaible mai store isai wrap kar dain gai


export default function useTheme(){  //custom hook
    return useContext(ThemeContext) //variable ka access kai liyai isai use karon ge 
}