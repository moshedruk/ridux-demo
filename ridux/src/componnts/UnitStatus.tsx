import React from 'react'
import IUnitStatus from '../interface/UnitStatusProps'


export default function UnitStatus({ unitName, unitStatus }: IUnitStatus) {
    return (
        <div>
            <p>name :{unitName}</p>
            <p>status :{unitStatus}</p>
        </div>
    )
}
