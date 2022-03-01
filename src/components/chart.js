import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default function Chart(props)
{
    return (
    <Sparklines data={props.units}>
       <SparklinesLine color={props.color} />
    </Sparklines>
    );

}
