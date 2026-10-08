"use client";

import { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";

const PlanContext = createContext();

const ContextProvider = ({ children }) => {

    const [plan, setPlan] = useState([]);
    const [saved, setSaved] = useState([]);
    const [completed, setCompleted] = useState([]);

    return (
        <PlanContext.Provider
            value={{
                plan,
                setPlan,
                saved,
                setSaved,
                completed,
                setCompleted
            }}
        >
            {children}
        </PlanContext.Provider>
    );
};

export const usePlan = () => useContext(PlanContext);

export default ContextProvider;