import { DEFENDER_COLOUR, FORWARD_COLOUR, KEEPER_COLOUR, MIDFIELDER_COLOUR } from './config';
import {Position} from './ts/interfaces';

// This module contains the definitions of all positions

// GK
export const GK: Position = {
    x: 772,
    y: 1670,
    circleColour: KEEPER_COLOUR
}

// DEFENDERS

// 4ATB Defenders
export const LB: Position = {
    x: 272,
    y: 1347,
    circleColour: DEFENDER_COLOUR
}
export const CBL: Position = {
    x: 571,
    y: 1447,
    circleColour: DEFENDER_COLOUR
}
export const CBR: Position = {
    x: 970,
    y: 1447,
    circleColour: DEFENDER_COLOUR
}
export const RB: Position = {
    x: 1272,
    y: 1347,
    circleColour: DEFENDER_COLOUR
}

// 5ATB Defenders
export const LWB: Position = {
    x: 272,
    y: 1247,
    circleColour: DEFENDER_COLOUR
}
export const LCB: Position = {
    x: 471,
    y: 1447,
    circleColour: DEFENDER_COLOUR
}
export const CCB: Position = {
    x: 772,
    y: 1447,
    circleColour: DEFENDER_COLOUR
}
export const RCB: Position = {
    x: 1070,
    y: 1447,
    circleColour: DEFENDER_COLOUR
}
export const RWB: Position = {
    x: 1272,
    y: 1247,
    circleColour: DEFENDER_COLOUR
}

// MIDFIELDERS
export const CDM: Position = {
    x: 772,
    y: 1083,
    circleColour: MIDFIELDER_COLOUR
}
export const LDM: Position = {
    x: 551.8,
    y: 976,
    circleColour: MIDFIELDER_COLOUR
}
export const RDM: Position = {
    x: 988.8,
    y: 976,
    circleColour: MIDFIELDER_COLOUR
}
export const LCM: Position = {
    x: 417,
    y: 883,
    circleColour: MIDFIELDER_COLOUR
}
export const RCM: Position = {
    x: 1152,
    y: 883,
    circleColour: MIDFIELDER_COLOUR
}
export const CAM: Position = {
    x: 772,
    y: 580.9,
    circleColour: MIDFIELDER_COLOUR
}
export const LAM: Position = {
    x: 319.1,
    y: 580.9,
    circleColour: MIDFIELDER_COLOUR
}
export const RAM: Position = {
    x: 1211.8,
    y: 580.9,
    circleColour: MIDFIELDER_COLOUR
}
export const LM: Position = {
    x: 328,
    y: 775,
    circleColour: MIDFIELDER_COLOUR
}
export const RM: Position = {
    x: 1216,
    y: 775,
    circleColour: MIDFIELDER_COLOUR
}

// FORWARDS
export const RW: Position = {
    x: 1258,
    y: 363,
    circleColour: FORWARD_COLOUR
}
export const LW: Position = {
    x: 282,
    y: 363,
    circleColour: FORWARD_COLOUR
}
export const LS: Position = {
    x: 588,
    y: 260,
    circleColour: FORWARD_COLOUR
}
export const RS: Position = {
    x: 962,
    y: 260,
    circleColour: FORWARD_COLOUR
}
export const ST: Position = {
    x: 772,
    y: 193,
    circleColour: FORWARD_COLOUR
}