import React, { useContext } from 'react'
import ChangeStatusProps from '../interface/ChangeStatusProps'
import DeploymentContext from '../context/DeploymentContext';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setValue } from '../redux/reducer';

export default function ChangeStatus({ unitName }: ChangeStatusProps) {
    const dispatch = useDispatch();
    const deploymentContext = useContext(DeploymentContext);
    const myunits = useSelector((state: RootState) => state.units);
    if (!deploymentContext) {
        throw new Error("ChangeStatus must be used within a DeploymentProvider");
    }
    const statuses = ["pending", "active", "complete"];
    const handleCycleStatus = () => {
        const currentStatus = myunits[unitName];
        const currentIndex = statuses.indexOf(currentStatus);
        const nextIndex = (currentIndex + 1) % statuses.length;
        const nextStatus = statuses[nextIndex];
        dispatch(setValue({ key: unitName, value: nextStatus }))
    };
    return (
        <button onClick={handleCycleStatus}>status change</button>
    )
}
