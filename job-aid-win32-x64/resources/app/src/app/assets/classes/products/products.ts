import { Plan } from './plans/plan';

import { MedigapPlans, MedigapCompliance, MedigapLogic } from './plans/medigap';
import { AdvantagePlans, AdvantageCompliance } from './plans/advantage';
import { DsnpPlans, DsnpCompliance } from './plans/dsnp';
import { PdpPlans, PdpCompliance } from './plans/pdp';

export let Products: Plan[] = [

        
        { planType: 'Medigap', planNames: MedigapPlans, compliance: MedigapCompliance, eligible: false},
        { planType: 'Medicare Advantage', planNames: AdvantagePlans, compliance: AdvantageCompliance, eligible: false},
        { planType: 'DSNP', planNames: DsnpPlans, compliance: DsnpCompliance, eligible: false},
        { planType: 'Prescription Drug Plan', planNames: PdpPlans, compliance: PdpCompliance, eligible: false}
    ]; 
