import Iloan from "./loans"
import Itransction from "./tranaction"

export default interface Iaccount{
    id: string
    balance: number
    loans:Iloan[]
    transction: Itransction[]
}