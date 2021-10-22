import { GK, LB, LCB, RCB, RB, CDM, LCM, RCM, LW, RW, ST, LDM, RDM, LAM, CAM, RAM, LS, RS, RM, LM } from "./position";
import { Formation } from "./ts/interfaces";

export const formations: Formation[] = [
    {
        name: '442',
        positions: [GK, LB, LCB, RCB, RB, LM, LDM, RDM, RM, LS, RS]
    },
    {
        name: '433',
        positions: [GK, LB, LCB, RCB, RB, LCM, CDM, RCM, LW, ST, RW]
    },
    {
        name: '4231',
        positions: [GK, LB, LCB, RCB, RB, LDM, RDM, LAM, CAM, RAM, ST]
    },
    {
        name: '442-diamond',
        positions: [GK, LB, LCB, RCB, RB, CDM, LM, RM, CAM, LS, RS]
    }
];