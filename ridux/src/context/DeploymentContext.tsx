import { createContext } from "react"
import DeploymentContextType from "../interface/DeploymentContextType"

const DeploymentContext = createContext<DeploymentContextType|
undefined>(undefined)

export default DeploymentContext