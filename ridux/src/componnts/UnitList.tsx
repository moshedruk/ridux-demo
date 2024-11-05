import React, { useContext } from 'react'
import DeploymentContext from '../context/DeploymentContext';
// import UnitStatus from './UnitStatus';
// import ChangeStatus from './ChangeStatus';
import '../css/list.css'
import MissionCompleted from './MissionCompleted';
import { useDispatch, useSelector } from 'react-redux';
import { inc, reefresh } from '../redux/reducer';
import { RootState } from '../redux/store';
import ChangeStatus from './ChangeStatus';
import UnitStatus from './UnitStatus';


export default function UnitList() {
    const dispatch = useDispatch();
    // const res = useSelector((state :RootState) =>state.counter.value)
    const myunits = useSelector((state: RootState) => state.units);


    // const age = useSelector((state: RootState) => state.another.age);
    const click = () => {
        console.log('click')

        dispatch(inc())
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
                </div>
            ))}
            <MissionCompleted />
            <button onClick={refreshAll}>fggf </button>
            <button onClick={click}>click </button>

        </div>
    )
}
