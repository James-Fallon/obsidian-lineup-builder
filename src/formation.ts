import { FOUR_FOUR_TWO, FOUR_FOUR_TWO_DIAMOND, FOUR_TWO_THREE_ONE, FOUR_THREE_THREE } from "./svgs";
import { Formation } from "./ts/interfaces";

export class FormationSVG {
    private svgString;
    constructor(svgString: string){
        this.svgString = svgString;
    }

    draw(players: string[]): string {
        let res: string = this.svgString;
        for(var i = 0; i < 11; i ++){
            res = res.replace(`[${i+1}]`, players[i]);
        }
        return res
    }
}

export const formations: Formation[] = [
    {
        name: '442',
        svg: new FormationSVG(FOUR_FOUR_TWO)
    },
    {
        name: '433',
        svg: new FormationSVG(FOUR_THREE_THREE)
    },
    {
        name: '4231',
        svg: new FormationSVG(FOUR_TWO_THREE_ONE)
    },
    {
        name: '442-diamond',
        svg: new FormationSVG(FOUR_FOUR_TWO_DIAMOND)
    }
];