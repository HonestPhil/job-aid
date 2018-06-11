import { ClientInfo } from './client-info';

export const Clients: ClientInfo = {
    demographics:{
        firstName: '',
        lastName: '',
        address: {
            street : '',
            city : '',
            state : '',
            zip : '',
        },
        birthday : ''
    },
    qualified:{
        esrd: false,
        medicareParts : false,
        sep: false
    },
    outcome:{
        enrolled : false,
        plan: { 
            type: '',
            name : '',
            effective : ''
        }
    }
};