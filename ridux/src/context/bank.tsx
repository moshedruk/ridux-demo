import { createContext } from "react";

export default interface Iuser {
    name: string;
    account_id :string
}

export default interface Ibank {
    treasure :number
    users:Iuser[]
}
export const BankContext = createContext("") 