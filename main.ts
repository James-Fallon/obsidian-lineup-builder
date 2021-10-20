import { FOUR_THREE_THREE } from 'media/four-three-three';
import { App, Editor, MarkdownView, MarkdownPostProcessorContext, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';

interface Formation {
    name: string;
    svg: string;
}

const four_three_three_formation: Formation = {
    name: '433',
    svg: FOUR_THREE_THREE
}


interface MyPluginSettings {
    mySetting: string;
}

const DEFAULT_SETTINGS: MyPluginSettings = {
    mySetting: 'default'
}

export default class LineupBuilderPlugin extends Plugin {
    settings: MyPluginSettings;

    onInit() { }

    async onload() {
        this.registerMarkdownCodeBlockProcessor(
            "lineup-builder",
            this.draw_lineup()
        );
    }

    private draw_lineup() {
        return (source: string, el: HTMLElement, ctx: MarkdownPostProcessorContext) => {

            const formation: Formation = LineupBuilderPlugin.parseCode(source);
            

            const xmlns = "http://www.w3.org/2000/svg";
            var boxWidth = 320;
            var boxHeight = 320;
            var block = document.createElementNS(xmlns, "svg");
            block.setAttributeNS(
                null,
                "viewBox",
                "0 0 " + boxWidth + " " + boxHeight
            );
            block.setAttributeNS(null, "width", String(boxWidth));
            block.setAttributeNS(null, "height", String(boxHeight));
            let g: SVGElement = document.createElementNS(xmlns, "g");
            g.innerHTML = formation.svg;
            block.appendChild(g);
            block.style.display = "block";
            el.appendChild(block);
        };
    }

    private static parseCode(input: string): Formation {
        const lines = input.split(/\r?\n/);
        let formation = lines[0];
        if (formation.startsWith("formation: ")) {
            formation = formation.replace("formation: ", "");
        }
        return four_three_three_formation;
    }
}
