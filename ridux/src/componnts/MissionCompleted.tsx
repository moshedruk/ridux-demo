
import React, { useContext } from 'react'
import DeploymentContext from '../context/DeploymentContext';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export default function MissionCompleted() {
    const deploymentContext = useContext(DeploymentContext);
    if (!deploymentContext) {
        throw new Error("MissionCompleted must be used within a DeploymentProvider");
    }
    
    const myunits = useSelector((state: RootState) => state.units);
    
    const allComplete = Object.values(myunits).every(status => status === 'complete');
    return (
        <div>
            {allComplete && <h1>all units complete </h1>}
        </div>
    )
}
