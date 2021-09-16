import { BUTTON, CARD } from "../../app/componentConstants";
import Button from "../Button/Button";
import Card from "../Card/Card";

const components = new Map();

components.set(CARD, {
    id: CARD,
    content: 'Card',
    mappedComponent: Card
});

components.set(BUTTON, {
    id: BUTTON,
    content: 'Button',
    mappedComponent: Button
});

const initialData = {
    components,
    columns: {
        'componentColumn': {
            id: 'componentColumn',
            title: 'Components',
            componentIDs: [CARD, BUTTON]
        },
        'activeComponent': {
            id: 'activeComponent',
            title: 'Active Component',
            componentIDs: [CARD]
        }
    },
    columnOrder: ['componentColumn', 'activeComponent']
}

export default initialData;

