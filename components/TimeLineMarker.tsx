import * as React from 'react'

interface ITimeLineMarkerHolderProps {

}

const defaultMarkerStyle: any = {
    'width': '30px',
    'height': '30px',
    'background': 'blue',
    'position': 'absolute',
    'left': '0',
    'border-radius': '50%',
}

export const TimeLineMarker: React.SFC<ITimeLineMarkerHolderProps> = (props) => {
    return (
        <div style={defaultMarkerStyle} className={'time-line-marker'}></div>
    )
}
