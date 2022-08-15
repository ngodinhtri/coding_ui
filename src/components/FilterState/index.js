import { createContext, useState } from "react";

export const FilterStateContext = createContext();

export function FilterStateProvider({ children }) {
    const [filterState, setFilterState] = useState("all");

    const switchFilter = (value) => {
        setFilterState(value);
    };

    const value = {
        filterState,
        switchFilter
    };

    return (
        <FilterStateContext.Provider value={value}>
            {children}
        </FilterStateContext.Provider>
    );
}
