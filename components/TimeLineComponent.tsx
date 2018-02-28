import * as React from 'react'

interface ITimeLineProps {
    layout: 'horizontal' | 'vertical';
    name: string;
    defaultItemStyle?: string;
}

export const TimeLine: React.SFC<ITimeLineProps> = (props) => {

    const timeLineClass = `react-timeline`

    return (

    !props.layout || props.layout === 'vertical'
    ?
        <div className={timeLineClass}>
            {props.children}
        </div>
    :
        <div className={timeLineClass}>
           {React.Children.map(props.children, (child: any) =>
                React.cloneElement(child, { layout: props.layout }))};
        </div>
    )
}
