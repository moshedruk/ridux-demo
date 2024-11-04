import { createContext } from "react";
import Iaccount from "../interface/account";

const accountContext = createContext<Iaccount>({
    id: "1",    
    balance: 110,
    loans: [],
    transction:[]
}) 
export default accountContext