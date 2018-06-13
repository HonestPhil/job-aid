export class ClientDemographics {
    firstName: string;
    lastName: string;
    address: {
        street: string;
        city: string;
        state: string;
        zip: string;
    };
    phone: string;
    birthday: string;
}

export class ClientQualifying {
    inbound: boolean;
    esrd: boolean;
    medicareParts: boolean;
    sep: boolean;
}

export class ClientOutcome {
    enrolled: boolean;
    plan: { 
        type: string;
        name: string;
        effective: string;
    };
    notes: string;
    
}

