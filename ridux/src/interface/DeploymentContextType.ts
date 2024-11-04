import Iunits from "./units";


export default interface DeploymentContextType {
    units: Iunits
    setUnits: React.Dispatch<React.SetStateAction<Iunits>>
}
