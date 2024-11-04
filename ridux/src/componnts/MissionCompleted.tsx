
import React, { useContext } from 'react'
import DeploymentContext from '../context/DeploymentContext';

export default function MissionCompleted() {
    const deploymentContext = useContext(DeploymentContext);
    if (!deploymentContext) {
        throw new Error("MissionCompleted must be used within a DeploymentProvider");
    }
    const { units } = deploymentContext;
    const allComplete = Object.values(units.units).every(status => status === 'complete');
    return (
        <div>
            {allComplete && <h1>all units complete </h1>}
        </div>
    )
}
