import { GK, LB, CBL, CBR, RB, CDM, LCM, RCM, LW, RW, ST, LDM, RDM, LAM, CAM, RAM, LS, RS, RM, LM, LWB, RWB, CCB, LCB, RCB } from "./position";
import { Formation } from "./ts/interfaces";

export const formations: Formation[] = [
    {
        name: '442',
        positions: [GK, LB, CBL, CBR, RB, LM, LDM, RDM, RM, LS, RS]
    },
    {
        name: '433',
        positions: [GK, LB, CBL, CBR, RB, LCM, CDM, RCM, LW, ST, RW]
    },
    {
        name: '4231',
        positions: [GK, LB, CBL, CBR, RB, LDM, RDM, LAM, CAM, RAM, ST]
    },
    {
        name: '442-diamond',
        positions: [GK, LB, CBL, CBR, RB, CDM, LM, RM, CAM, LS, RS]
    },
    {
        name: '443',
        positions: [GK, LB, CBL, CBR, RB, LM, LDM, RDM, RM, LW, ST, RW]
    },
    {
        name: '541',
        positions: [GK, LWB, LCB, CCB, RCB, RWB, LM, LDM, RDM, RM, ST]
    },
    {
        name: '523',
        positions: [GK, LWB, LCB, CCB, RCB, RWB, LDM, RDM, LW, ST, RW]
    },
    {
        name: '532',
        positions: [GK, LWB, LCB, CCB, RCB, RWB, LCM, CDM, RCM, LS, RS]
    }
];