import { FormationSVG } from "src/formation";

export interface ParsedCode {
    formation: Formation;
    players: string[];
}

export interface Formation {
    name: string;
    svg: FormationSVG;
}