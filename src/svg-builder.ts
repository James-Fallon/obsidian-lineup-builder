import { Position } from "./ts/interfaces";

const LABEL_OFFSET_X = -69;
const LABEL_OFFSET_Y = 140;

function buildLabels(positions: Position[], players: string[]): string[] {
    let labels: string[] = [];
    for(var i = 0; i < positions.length; i++){
        labels[i] = buildLabel(positions[i], players[i]);
    }
    return labels;
}

function buildCircles(positions: Position[]): string[] {
    return positions.map((position) => buildCircle(position));
}

function buildLabel(position: Position, playerName: string): string {
    return `<tspan x="${position.x + LABEL_OFFSET_X}" y="${position.y + LABEL_OFFSET_Y}">${playerName}</tspan>`;
}

function buildCircle(position: Position): string {
    return `<use xlink:href="#pos" x="${position.x}" y="${position.y}" fill="${position.circleColour}"/>`
}

export function buildSvg(positions: Position[], players: string[]): string {
    return `
        <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1384 1920" preserveAspectRatio="xMinYMin" version="1.1">
        <path d="M44.5,34.5h1312v1856h-1312z" fill="#393"/>
        <path d="M69,59h1264.5v1808.5h-1264.5zM69,964h820.6a197.1,197.1 0 0 1-394.2,0a197.1,197.1 0 0 1 394.2,0h444M515,59v173h373.6v-173M331,59v347h740v-347M515,1868v-173h373.6v173M331,1868v-347h740v347" fill="none" stroke="#fff" stroke-width="4"/>
        <defs>
        <path d="m0,0a72,72 0 0 1-144,0 72,72 0 1 1 144,0z" id="pos"/>
        </defs>

        <g stroke="#000" stroke-width="6">
            ${buildCircles(positions).join('\n')}
        </g>

        <text style="font-size:56px;text-align:center;line-height:125%;text-anchor:middle;fill:#000000;font-family:Bitstream Vera Sans" x="709.4" y="1871.6" linespacing="125%">
            ${buildLabels(positions, players).join('\n')}
        </text>
        </svg>`
}