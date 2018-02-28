interface ITimeLineProps {
    layout: 'horizontal' | 'vertical';
    name: string;
}

interface IItemTitle {
    title?: string
    style?: {[style: string]: string | number}
}

interface IItemDescription {
    description?: string
    style?: {[style: string]: string | number}
}

interface ITimeLineItemProps {
    title?: string | IItemTitle;
    description?: string | IItemDescription;

}

