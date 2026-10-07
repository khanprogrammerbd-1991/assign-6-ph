"use client";

import { createContext,useContext, useState } from 'react';
import {toast} from 'react-hot-toast';

const PlanContext = createContext();   //creating context

const ContextProvider = ({children}) => {

    // store which data in variable and set the data in state variable
    const [plan, setPlan] = useState([]);
    const [saved, setSaved] = useState([]);

    

    return (
        // creating provider and passing data as value and wrapping children with provider so that all the components can access the data
        <PlanContext.Provider value ={{plan, setPlan, saved, setSaved}}>{children}</PlanContext.Provider>
    );
};

export default ContextProvider;
    
