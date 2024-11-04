import Iloan from "./loans"

export default interface Iaccount{
    id: string
    balance: number
    loan:[Iloan]
}