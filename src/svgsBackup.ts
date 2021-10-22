import { fouFourTwoDiamondSvg, fouFourTwoSvg, fourThreeThreeSvg, fourTwoThreeOneSvg } from "./svg-builder";

const SVG_OPENING_TAG = `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1384 1920" preserveAspectRatio="xMinYMin" version="1.1">`;

const PITCH = 
    `<path d="M44.5,34.5h1312v1856h-1312z" fill="#393"/>
    <path d="M69,59h1264.5v1808.5h-1264.5zM69,964h820.6a197.1,197.1 0 0 1-394.2,0a197.1,197.1 0 0 1 394.2,0h444M515,59v173h373.6v-173M331,59v347h740v-347M515,1868v-173h373.6v173M331,1868v-347h740v347" fill="none" stroke="#fff" stroke-width="4"/>`;

const CIRCLE_DEF = 
    `<defs>
    <path d="m0,0a72,72 0 0 1-144,0 72,72 0 1 1 144,0z" id="pos"/>
    </defs>`;

const KEEPER_COLOUR = '#808080';
const DEFENDER_COLOUR = '#2009ff';
const MIDFIELDER_COLOUR = '#ff0';
const FORWARD_COLOUR = '#f00';

function buildCircle(x: number, y: number, colour: string): string {
    return `<use xlink:href="#pos" x="${x}" y="${y}" fill="${colour}"/>`
}

function buildLabel(x: number, y: number, positionId: number): string {
    return `<tspan x="${x}" y="${y}">[${positionId}]</tspan>`
}

const BACK_FOUR_LABELS = 
    buildLabel(701.6, 1798, 1) +
    buildLabel(203, 1484.8, 2) + 
    buildLabel(501.9, 1591.7, 3) + 
    buildLabel(901.2, 1591.7, 4) + 
    buildLabel(1200.5, 1484.8, 5)

const GK_CIRCLE = buildCircle(772, 1670, KEEPER_COLOUR);
const LB_CIRCLE = buildCircle(272, 1347, DEFENDER_COLOUR);
const LCB_CIRCLE = buildCircle(571, 1447, DEFENDER_COLOUR);
const RCB_CIRCLE = buildCircle(970, 1447, DEFENDER_COLOUR);
const RB_CIRCLE = buildCircle(1272, 1347, DEFENDER_COLOUR);


const LM_CIRCLE = buildCircle(1272, 1347, MIDFIELDER_COLOUR);
const RM_CIRCLE = buildCircle(1272, 1347, MIDFIELDER_COLOUR);

const BACK_FOUR_CIRCLES = 
    GK_CIRCLE + LB_CIRCLE + LCB_CIRCLE + RCB_CIRCLE + RB_CIRCLE;

    export const FOUR_THREE_THREE = fourThreeThreeSvg;
// export const FOUR_THREE_THREE = `
//     ${SVG_OPENING_TAG}
//     ${CIRCLE_DEF}
//     ${PITCH}

//     <g stroke="#000" stroke-width="6">
//         ${BACK_FOUR_CIRCLES}

//         ${buildCircle(417, 883, MIDFIELDER_COLOUR)}
//         ${buildCircle(764, 983, MIDFIELDER_COLOUR)}
//         ${buildCircle(1152, 883, MIDFIELDER_COLOUR)}
        
//         ${buildCircle(774, 193, FORWARD_COLOUR)}
//         ${buildCircle(282, 363, FORWARD_COLOUR)}
//         ${buildCircle(1258, 367, FORWARD_COLOUR)}
//     </g>

//     <text style="font-size:56px;font-style:normal;font-weight:normal;text-align:center;line-height:125%;text-anchor:middle;fill:#000;font-family:Bitstream Vera Sans">
//         ${BACK_FOUR_LABELS}

//         ${buildLabel(342.4, 1016.2, 6)}
//         ${buildLabel(689.8, 1116.4, 7)}
//         ${buildLabel(1081.4, 1016.2, 8)}

//         ${buildLabel(214.8, 505.5, 9)}
//         ${buildLabel(706.8, 334.7, 10)}
//         ${buildLabel(1191.4, 508.6, 11)}
//     </text>
//     </svg>`;

export const FOUR_TWO_THREE_ONE = fourTwoThreeOneSvg;
// export const FOUR_TWO_THREE_ONE = `
//     ${SVG_OPENING_TAG}
//     ${PITCH}
//     ${CIRCLE_DEF}

//     <g stroke="#000" stroke-width="6">
//         ${BACK_FOUR_CIRCLES}

//         ${buildCircle(319.1, 580.9, MIDFIELDER_COLOUR)}
//         ${buildCircle(551.8, 1076, MIDFIELDER_COLOUR)}
//         ${buildCircle(772, 580.9, MIDFIELDER_COLOUR)}
//         ${buildCircle(988.8, 1076, MIDFIELDER_COLOUR)}
//         ${buildCircle(1211.8, 580.9, MIDFIELDER_COLOUR)}

//         ${buildCircle(772, 207.6, FORWARD_COLOUR)}
//     </g>

//     <text style="font-size:56px;text-align:center;line-height:125%;text-anchor:middle;fill:#000000;font-family:Bitstream Vera Sans" x="709.4" y="1871.6" linespacing="125%">
//         ${BACK_FOUR_LABELS}

//         ${buildLabel(480.1, 1208.7, 6)}
//         ${buildLabel(920.2, 1208.7, 7)}
//         ${buildLabel(244.7, 719.5, 8)}
//         ${buildLabel(701.6, 719.5, 9)}
//         ${buildLabel(1144, 719.5, 10)}

//         ${buildLabel(701.6, 349.4, 11)}
//     </text>
//     </svg>`

export const FOUR_FOUR_TWO_DIAMOND = fouFourTwoDiamondSvg;
// export const FOUR_FOUR_TWO_DIAMOND = `
//     ${SVG_OPENING_TAG}
//     ${PITCH}
//     ${CIRCLE_DEF}

//     <g stroke="#000" stroke-width="6">

//         ${BACK_FOUR_CIRCLES}

//         <g fill="${MIDFIELDER_COLOUR}">
//         <circle cx="328" cy="875" r="72"/>
//         <circle cx="1076" cy="877" r="72"/>
//         <circle cx="699" cy="652" r="72"/>
//         <circle cx="699" cy="1098" r="72"/>

//         <g fill="${FORWARD_COLOUR}">
//         <circle cx="518" cy="260" r="72"/>
//         <circle cx="892" cy="255" r="72"/>
//         </g>
//         </g>
//     </g>

//     <text style="font-size:56px;font-weight:normal;text-align:center;line-height:125%;text-anchor:middle;fill:#000;font-family:Bitstream Vera Sans">
//         ${BACK_FOUR_LABELS}

//         <tspan y="1230" x="700">[6]</tspan>
//         <tspan x="323" y="1014">[7]</tspan>
//         <tspan y="1017" x="1077">[8]</tspan>
//         <tspan x="696" y="784">[9]</tspan>
//         <tspan y="402" x="523">[10]</tspan>
//         <tspan x="897" y="397">[11]</tspan>
//     </text>
// </svg>`

export const FOUR_FOUR_TWO = fouFourTwoSvg;
// export const FOUR_FOUR_TWO = `
//     <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 422 580" preserveAspectRatio="xMinYMin">
//     <path d="M8,6h400.6v567H8z" fill="#393"/>
//     <path d="M15.5,13.5h386v552h-386zM15.5,289.5h386M151.4,13.6v52.8h114.3v-52.8M95.3,13.6v106h226v-106M151.4,565.6v-52.8h114.3v52.8M95.3,565.6v-106h226v106M146,289.5a62.5,62.5 0 0 0 125,0a62.5,62.5 0 0 0-125,0" fill="none" stroke="#fff" stroke-width="1"/>
//         <circle cx="139.5" cy="89.5" r="23" fill="${MIDFIELDER_COLOUR}d0d" stroke="#000" stroke-width="2.5"/>
//         <circle cx="276" cy="89.5" r="23" fill="${MIDFIELDER_COLOUR}d0d" stroke="#000" stroke-width="2.5"/>
//         <circle cx="67" cy="233.5" r="23" fill="${MIDFIELDER_COLOUR}" stroke="#000" stroke-width="2.5"/>
//         <circle cx="147" cy="293.5" r="23" fill="${MIDFIELDER_COLOUR}" stroke="#000" stroke-width="2.5"/>
//         <circle cx="263" cy="293.5" r="23" fill="${MIDFIELDER_COLOUR}" stroke="#000" stroke-width="2.5"/>
//         <circle cx="346.5" cy="233.5" r="23" fill="${MIDFIELDER_COLOUR}" stroke="#000" stroke-width="2.5"/>
//         <circle cx="57" cy="407" r="23" fill="#3b0dff" stroke="#000" stroke-width="2.5"/>
//         <circle cx="268" cy="437" r="23" fill="#3b0dff" stroke="#000" stroke-width="2.5"/>
//         <circle cx="147" cy="437" r="23" fill="#3b0dff" stroke="#000" stroke-width="2.5"/>
//         <circle cx="361" cy="407" r="23" fill="#3b0dff" stroke="#000" stroke-width="2.5"/>
//         <circle cx="210" cy="505" r="23" fill="#888" stroke="#000" stroke-width="2.5"/>
    
//     <text style="font-size:18px;font-weight:normal;text-align:center;line-height:125%;text-anchor:middle;fill:#000;font-family:Bitstream Vera Sans">
//         <tspan x="211.4" y="555">[1]</tspan>
//         <tspan x="57.1" y="455">[2]</tspan>
//         <tspan x="147.9" y="487.1">[3]</tspan>
//         <tspan x="270" y="487.1">[4]</tspan>
//         <tspan x="360.7" y="455">[5]</tspan>
//         <tspan x="67.9" y="275.7">[6]</tspan>
//         <tspan x="148.6" y="345">[7]</tspan>
//         <tspan x="265.7" y="345">[8]</tspan>
//         <tspan x="349.3" y="275.7">[9]</tspan>
//         <tspan x="140" y="140.7">[10]</tspan>
//         <tspan x="276.4" y="140.7">[11]</tspan>
//     </text>
//     </svg>`;
