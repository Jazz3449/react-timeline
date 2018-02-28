import * as React from 'react'

interface ITimeLineItemHolderProps {
    onItemClick: (id: string) => void;
    layout?: string;
}

export const TimeLineItemHolder: React.SFC<ITimeLineItemHolderProps> = (props) => {

    const timeLineClass = `react-timeline`

    console.log(props.layout);

    return (

        <div>
            {React.Children.map(props.children, (child: any) =>
            React.cloneElement(child, 
            {   
                onItemClick: props.onItemClick ? props.onItemClick : null,
                layout: props.layout 
            }))}
        </div>
    )
}
