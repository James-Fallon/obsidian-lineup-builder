import { FOUR_THREE_THREE, FOUR_FOUR_TWO, FOUR_TWO_THREE_ONE, FOUR_FOUR_TWO_DIAMOND } from "src/svgs";


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

export const fourFourTwo = new FormationSVG(FOUR_FOUR_TWO);
export const fourTwoThreeOne = new FormationSVG(FOUR_TWO_THREE_ONE);
export const fourThreeThree = new FormationSVG(FOUR_THREE_THREE);
export const fourFourTwoDiamond = new FormationSVG(FOUR_FOUR_TWO_DIAMOND);
