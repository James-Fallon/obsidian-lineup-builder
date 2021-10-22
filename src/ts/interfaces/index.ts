export interface ParsedCode {
    formation: Formation;
    players: string[];
}

export interface Formation {
    name: string;
    positions: Position[];
}

export interface Position {
    x: number;
    y: number;
    circleColour: string;
}
