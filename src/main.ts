import { fourFourTwo, fourFourTwoDiamond, fourThreeThree, fourTwoThreeOne } from 'src/formation';
import { MarkdownPostProcessorContext, Plugin } from 'obsidian';
import { ParsedCode, Formation } from './ts/interfaces';

const formations: Formation[] = [
    {
        name: '442',
        svg: fourFourTwo
    },
    {
        name: '433',
        svg: fourThreeThree
    },
    {
        name: '4231',
        svg: fourTwoThreeOne
    },
    {
        name: '442-diamond',
        svg: fourFourTwoDiamond
    }
];

export default class LineupBuilderPlugin extends Plugin {

    onInit() { }

    async onload() {
        this.registerMarkdownCodeBlockProcessor(
            "lineup",
            this.draw_lineup()
        );
    }

    private draw_lineup() {
        return (source: string, el: HTMLElement, ctx: MarkdownPostProcessorContext) => {

            const {formation, players} = LineupBuilderPlugin.parseCode(source);

            const xmlns = "http://www.w3.org/2000/svg";
            var boxWidth = 346;
            var boxHeight = 480;
            var block = document.createElementNS(xmlns, "svg");
            block.setAttributeNS(
                null,
                "viewBox",
                "0 0 " + boxWidth + " " + boxHeight
            );
            block.setAttributeNS(null, "width", String(boxWidth));
            block.setAttributeNS(null, "height", String(boxHeight));
            block.innerHTML = formation.svg.draw(players);
            el.appendChild(block);
        };
    }

    private static parseCode(input: string): ParsedCode {
        const lines = input.split(/\r?\n/);
        let formation: string = lines[0];
        if (formation.startsWith("formation: ")) {
            formation = formation.replace("formation: ", "");
        }

        let players: string[] = [];
        let playersLine: string = lines[1];
        if (playersLine.startsWith("players: ")) {
            players = playersLine.replace("players: ", "").split(',');
        }

        return {
            formation: formations.find(x => x.name === formation),
            players
        };
    }
}
