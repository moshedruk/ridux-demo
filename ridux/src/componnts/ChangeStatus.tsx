import React, { useContext } from 'react'
import ChangeStatusProps from '../interface/ChangeStatusProps'
import DeploymentContext from '../context/DeploymentContext';

export default function ChangeStatus({ unitName }:ChangeStatusProps) {
    const deploymentContext = useContext(DeploymentContext);
    
    if (!deploymentContext) {
        throw new Error("ChangeStatus must be used within a DeploymentProvider");
        }
        
        const { setUnits } = deploymentContext;
        const statuses = ["pending", "active", "complete"];

const handleCycleStatus = () => {
    setUnits((prevUnits) => {
        const currentStatus = prevUnits.units[unitName];
        const currentIndex = statuses.indexOf(currentStatus);       
        
        const nextIndex = (currentIndex + 1) % statuses.length;
        const nextStatus = statuses[nextIndex];

        return {
            ...prevUnits,
            units: {
                ...prevUnits.units,
                [unitName]: nextStatus,
            },
        };
    });
};
  return (
    <button onClick={handleCycleStatus }>status change</button>
  )
}
