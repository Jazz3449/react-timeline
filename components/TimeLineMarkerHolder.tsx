import * as React from 'react'

interface ITimeLineMarkerHolderProps {
    layout?: string;
}

const defaultLineStyle: any = {
    'width': '5px',
    'background': '#000',
    'height': '800px',
    'position': 'absolute',
    'margin-left': '4px'
}

export const TimeLineMarkerHolder: React.SFC<ITimeLineMarkerHolderProps> = (props) => {

    console.log(props.layout);

    return (
        <div style={defaultLineStyle} className={'time-line-marker-holder'}></div>
    )
}
