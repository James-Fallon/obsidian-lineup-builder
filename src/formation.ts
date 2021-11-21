import { GK, LB, CBL, CBR, RB, CDM, LCM, RCM, LW, RW, ST, LDM, RDM, LAM, CAM, RAM, LS, RS, RM, LM, LWB, RWB, CCB, LCB, RCB, CML, CMR } from "./position";
import { Formation } from "./ts/interfaces";

export const formations: Formation[] = [
    {
        name: '442',
        positions: [GK, LB, CBL, CBR, RB, LM, CML, CMR, RM, LS, RS]
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
        name: '4411',
        positions: [GK, LB, CBL, CBR, RB, LM, CML, CMR, RM, CAM, ST]
    },
    {
        name: '4141',
        positions: [GK, LB, CBL, CBR, RB, CDM, LM, CML, CMR, RM, ST]
    },
    {
        name: '424',
        positions: [GK, LB, CBL, CBR, RB, CML, CMR, LAM, RAM, LS, RS]
    },	
    {
        name: '541',
        positions: [GK, LWB, LCB, CCB, RCB, RWB, LM, CML, CMR, RM, ST]
    },
    {
        name: '523',
        positions: [GK, LWB, LCB, CCB, RCB, RWB, CML, CMR, LW, ST, RW]
    },
    {
        name: '532',
        positions: [GK, LWB, LCB, CCB, RCB, RWB, LCM, CDM, RCM, LS, RS]
    },
    {
        name: '343',
        positions: [GK, LCB, CCB, RCB, LM, CML, CMR, RM, LW, ST, RW]
    },
    {
        name: '352',
        positions: [GK, LCB, CCB, RCB, LM, LDM, RDM, RM, CAM, LS, RS]
    }
];
