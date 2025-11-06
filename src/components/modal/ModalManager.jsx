import { useModal } from '../../hooks';
import {CreateCabin , ConfirmDeleted, Modal} from '../index'


const ModalManager = () => {
    const {modal} = useModal();
    if(!modal) return null;
    const {type, props} = modal;

    switch(type) {
        case 'create': 
            return <Modal><CreateCabin /></Modal>
        case 'delete':
            return <Modal><ConfirmDeleted id={props.id} name={props.name} deleteFunc={props.deleteFunc}/></Modal>
        case 'edit':
            return <Modal><CreateCabin cabinData={props.cabin}/></Modal>
        default: 
            return null
    }
}

export default ModalManager