import Iuser from "./user";

export default interface Itransction{
    amount: number;
    from: Iuser
    to: Iuser;
}