import * as React from 'react'



export const TimeLine: React.SFC<ITimeLineProps> = (props) => {

    const timeLineClass = `react-timeline`

    return (
        <div className={timeLineClass}>
            {props.children}
        </div>
    )
}
