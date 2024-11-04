import React, { useContext } from 'react'
import DeploymentContext from '../context/DeploymentContext';
import UnitStatus from './UnitStatus';
import ChangeStatus from './ChangeStatus';
import '../css/list.css'
import MissionCompleted from './MissionCompleted';


export default function UnitList() {
    const deploymentContext = useContext(DeploymentContext);
    if (!deploymentContext) {
        return <div>Loading...</div>; 
    }
    const { units } = deploymentContext;
  return (
    <div className='div-units'>
            <h1>Units Status</h1>
            
                {Object.entries(units.units).map(([unitName, status]) => (
                    <div className='item-unit' key={unitName}>
                        <UnitStatus unitName = {unitName} unitStatus =  {status}/><ChangeStatus unitName =  {unitName}/>
                    </div>
                ))}
                <MissionCompleted/>
            
        </div>
  )
}
