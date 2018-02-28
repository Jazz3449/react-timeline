import * as React from 'react'
import { TimeLineMarker } from './TimeLineMarker'

interface ITimeLineItemProps {
    title?: IItemTitle;
    description?: IItemDescription;
    point?: boolean;
    arrow?: boolean;
    onItemClick?: (id: string) => void;
    id: string;
    allowClick?: boolean;
    custom?: boolean;
    layout?: string;
}

interface IItemTitle {
    text?: string
    style?: {[style: string]: string | number}
}

interface IItemDescription {
    text?: string
    style?: {[style: string]: string | number}
}

const defaultItemStyle: any = {
    'margin-left': '100px',
    'margin-bottom': '20px',
    'width': '350px',
    'padding': '10px',
    'border': '1px solid #ccc',
}

const defaultArrowStyle: any = {
    'width': '0', 
    'height': '0', 
    'border-top': '10px solid transparent',
    'border-bottom': '10px solid transparent', 
    'border-right': '10px solid blue',    
    'position': 'absolute',
    'left': '98px',
}



export const TimeLineItem: React.SFC<ITimeLineItemProps> = (props) => { 

    console.log(props.layout);

    const onItemClick = (id: string) => {
        props.onItemClick(id);
    }

    return (
    
        <div className='timeline-item'>
        {!props.custom ?
            <div 
                style={defaultItemStyle} 
                onClick={props.allowClick || props.allowClick === undefined ? () => onItemClick(props.id) : null}>

                {props.point === undefined || props.point ? <TimeLineMarker></TimeLineMarker> : null}
                {props.arrow === undefined || props.arrow 
                    ? <div style={defaultArrowStyle}></div> : null}
                <div className={'timeline-item-title'} style={props.title && props.title.style ? props.title.style : null}>
                    {props.title && props.title.text ? props.title.text : ''}
                </div>
                <div className={'timeline-item-description'} style={{}}>
                    {props.description.text}
                </div>

                {props.children}
            </div>
        : props.children}
        </div>
    )
}