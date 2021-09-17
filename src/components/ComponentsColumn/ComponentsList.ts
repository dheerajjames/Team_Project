import { BUTTON, CARD, MODAL } from "../../app/componentConstants";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";

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

components.set(MODAL, {
    id: MODAL,
    content: 'Modal',
    mappedComponent: Modal
});

const initialData = {
    components,
    columns: {
        'componentColumn': {
            id: 'componentColumn',
            title: 'Components',
            componentIDs: [CARD, BUTTON, MODAL]
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

