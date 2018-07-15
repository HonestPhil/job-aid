

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
    medicareParts: {
        parts: string;
        partA: string;
        partB: string;
    };
    sep: boolean;
    extraHelp: boolean;
    medicareId: string;
}

export class ClientOutcome {
    outcome: string;
    plan: {
        planType: string;
        supType: string;
        planName: string;
        pdpName: string;
        planEffective: string;
        pdpEffective: string;
        planConfirm: string;
        pdpConfirm: string;
        
    };
    notes: string;
    
}

