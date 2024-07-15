import { useContext } from "react";
import { GlobalContext } from "../context/AppContext";

export const useGlobalContext = () => useContext(GlobalContext);
