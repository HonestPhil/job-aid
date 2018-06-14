import { ClientService } from '../../services/client.service';
import { ClientInfo } from '../clients/client-info';
import { Clients } from '../clients/clients';

export class Logic {
    client: ClientInfo = Clients;
    eligible: boolean;
    
    gapEligible = this.gap();
    
    gap(): boolean {
        if (this.client.qualified.medicareParts === 'both'){
            this.eligible = true;
        } else {
            this.eligible = false;
        }
        return this.eligible;
    }
    // adv(): boolean {}
    // dsnp(): boolean {}
    // pdp(): boolean {}
}
