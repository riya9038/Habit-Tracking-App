import { createContext } from "react";
import { useProvideList } from "../hooks";

const initialState={
    list:[],
    status: null,
}
export const HabitContext= createContext(initialState);
export const HabitProvider = ({ children }) => {
    const data = useProvideList();
  
    return <HabitContext.Provider value={data}>{children}</HabitContext.Provider>;
  };
