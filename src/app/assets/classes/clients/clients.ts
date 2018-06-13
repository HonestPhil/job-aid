import { ClientInfo } from './client-info';

export const Clients: ClientInfo = {
    demographics:{
        firstName: 'John',
        lastName: 'Doe',
        address: {
            street : '123 Main st',
            city : 'Charlotte',
            state : 'NJ',
            zip : '28213',
        },
        phone: '(704)555-7913',
        birthday : '12/08/1983'
    },
    qualified:{
        inbound: false,
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
        },
        notes: ''
    }
};