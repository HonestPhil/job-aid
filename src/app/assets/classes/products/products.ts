import { Plan } from './plans/plan';

import { MedigapPlans, MedigapCompliance } from './plans/medigap';
import { AdvantagePlans, AdvantageCompliance } from './plans/advantage';



export const Products: Plan[] = [

        
        { planType: 'Medigap', planNames: MedigapPlans, compliance: MedigapCompliance, eligible: false},
        { planType: 'Medicare Advantage', planNames: AdvantagePlans, compliance: AdvantageCompliance, eligible: false},
        // { planType: 'DSNP', planNames: [], compliance: [], eligible: false}
        // { planType: 'Prescription Drug Plan', planNames: [], compliance: [], eligible: false}
    ]; 
