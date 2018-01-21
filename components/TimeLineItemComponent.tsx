import * as React from 'react'


export const TimeLineItem: React.SFC<ITimeLineItemProps> = (props) => { 
    return (
    
        <div className='timeline-item'>
            <div className={'item-point'}></div>
            {props.title}
            {props.description}
        </div>
    )
}