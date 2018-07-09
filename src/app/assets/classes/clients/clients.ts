import { ClientInfo } from './client-info';


export const Clients: ClientInfo = {
    demographics:{
        firstName: 'John',
        lastName: 'Doe',
        address: {
            street : '',
            city : '',
            state : 'NJ',
            zip : '',
        },
        phone: '',
        birthday : ''
    },
    qualified:{
        inbound: false,
        esrd: false,
        medicareParts : {
            parts: '',
            partA: '',
            partB: ''
        },
        sep: false,
        extraHelp: false
    },
    outcome:{
        outcome : '',
        plan: {
            planType: '',
            supType: '',
            name: '',
            pdpName: '',
            effective: '',
            pdpEffective: ''
        },
        notes: ''
    }
};