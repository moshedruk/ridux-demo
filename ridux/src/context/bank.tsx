import { createContext } from "react";
import Ibank from "../interface/bank";


 const BankContext = createContext<Ibank>({
    traesher:10000,
    users:[{
        name:"John",
        account_id:"12345"
        },
        {
        name:"Jo",
        account_id:"54321"
        }]
}) 
export default BankContext