import React, { useContext } from 'react'
import DeploymentContext from '../context/DeploymentContext';
import '../css/list.css'
import MissionCompleted from './MissionCompleted';
import { useDispatch, useSelector } from 'react-redux';
import { delete_, reefresh } from '../redux/reducer';
import { RootState } from '../redux/store';
import ChangeStatus from './ChangeStatus';
import UnitStatus from './UnitStatus';


export default function UnitList() {
    const dispatch = useDispatch();
    const myunits = useSelector((state: RootState) => state.units);
    const btnDelete = (unitName:string) => {
        dispatch(delete_({name: unitName})) 
    }

    const refreshAll = () => {
        dispatch(reefresh())
    }
    const deploymentContext = useContext(DeploymentContext);
    if (!deploymentContext) {
        return <div>Loading...</div>;
    }
    return (
        <div className='div-units'>
            <h1>Units Status :</h1>
            {Object.entries(myunits).map(([unitName, status]) => (
                <div className='item-unit' key={unitName}>
                    <UnitStatus unitName={unitName} unitStatus={status} /><ChangeStatus unitName={unitName} />
                    <button  onClick={() => btnDelete(unitName)}>delete </button>
                </div>
            ))}
            <MissionCompleted />
            <button className='btn' onClick={refreshAll}>Refreshment </button>
        </div>
    )
}
