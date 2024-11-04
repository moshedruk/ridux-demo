
import React, { useContext } from 'react'
import DeploymentContext from '../context/DeploymentContext';

export default function MissionCompleted() {
    const deploymentContext = useContext(DeploymentContext);
    if (!deploymentContext) {
        throw new Error("MissionCompleted must be used within a DeploymentProvider");
        }
        const { units } = deploymentContext;
        console.log(units);
        let allComplete = false;
       
        allComplete = (Object.values(units).every(status => status == 'complete'))
        console.log(allComplete)
        
  return (
    <div>
        <h1>dfdf</h1>
      {allComplete && <h1>all units complete </h1>}
      
    </div>
  )
}
