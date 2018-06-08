import { Plan } from './plans/plan';

import { MedigapPlans, MedigapCompliance } from './plans/medigap';
import { AdvantagePlans, AdvantageCompliance } from './plans/advantage';

export const Products: Plan[] = [
        { planType: 'Medigap', planNames: MedigapPlans, compliance: MedigapCompliance},
        { planType: 'Medicare Advantage', planNames: AdvantagePlans, compliance: AdvantageCompliance},
        // { planType: 'DSNP', planNames: [], compliance: []}
        // { planType: 'Prescription Drug Plan', planNames: [], compliance: []}
    ]; 
