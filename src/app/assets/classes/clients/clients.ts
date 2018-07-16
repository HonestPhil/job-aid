import { ClientInfo } from './client-info';


export const Clients: ClientInfo = {
    demographics:{
        firstName: '',
        lastName: '',
        address: {
            street : '',
            city : '',
            state : 'NJ',
            zip : ''
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
        extraHelp: false,
        medicareId: ''
    },
    outcome:{
        outcome : '',
        plan: {
            planType: '',
            supType: '',
            planName: '',
            pdpName: '',
            planEffective: '',
            pdpEffective: '',
            planConfirm: '',
            pdpConfirm: ''
        },
        notes: ''
    }
};