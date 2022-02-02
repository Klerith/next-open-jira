import { createContext } from 'react';


interface ContextProps {
    sidemenuOpen: boolean;

    // Methods
    closeSideMenu: () => void;
    openSideMenu: () => void;
}


export const UIContext = createContext({} as ContextProps );

