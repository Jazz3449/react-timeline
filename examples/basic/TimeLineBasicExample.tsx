import { TimeLine, TimeLineItem, TimeLineMarkerHolder, TimeLineItemHolder } from 'react-ui-timeline' 
import * as React from 'react'

interface ITimeLineBasicExampleProps {
    
}


export class TimeLineBasicExample extends React.Component<ITimeLineBasicExampleProps> {

    onItemClick = (id: string) => {
        console.log(id)
    }

    getTimeLineItems = () => {
        return (
            <div>
                <TimeLineItemHolder onItemClick={this.onItemClick}>
                    <TimeLineItem 
                        id={'1'}
                        title={{ text: 'Step One', style: {'background': 'red', color: '#fff', padding: '10px'} }} 
                        description={{text: 'Step One Description'}}>
                    </TimeLineItem>
                    <TimeLineItem 
                        id={'2'}
                        arrow={false} 
                        point={false} 
                        title={{ text: 'Step Two' }} 
                        description={{ text: 'Step Two Description' }}
                        allowClick={false}>
                    </TimeLineItem>
                    <TimeLineItem 
                        id={'3'}
                        title={{ text: 'Step Three' }}
                        description={{text: 'Step Four Description'}}>
                    </TimeLineItem>
                    <TimeLineItem 
                        id={'4'}
                        title={{ text: 'Step Four' }}
                        description={{text: 'Step Four Description'}}>
                    </TimeLineItem>
                </TimeLineItemHolder>
            </div>
        )
    }

    render () {
        return (
            <div>
                <TimeLine name={'timeline-basic'} layout={'horizontal'}>
                    <TimeLineMarkerHolder></TimeLineMarkerHolder>
                    {this.getTimeLineItems()}
                </TimeLine>
            </div>
        )
    }

}
