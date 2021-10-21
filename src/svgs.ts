const SVG_OPENING_TAG = `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1384 1920" preserveAspectRatio="xMinYMin" version="1.1">`;

const PITCH = 
    `<path d="M44.5,34.5h1312v1856h-1312z" fill="#393"/>
    <path d="M69,59h1264.5v1808.5h-1264.5zM69,964h820.6a197.1,197.1 0 0 1-394.2,0a197.1,197.1 0 0 1 394.2,0h444M515,59v173h373.6v-173M331,59v347h740v-347M515,1868v-173h373.6v173M331,1868v-347h740v347" fill="none" stroke="#fff" stroke-width="4"/>`;

const CIRCLE_DEF = 
    `<defs>
    <path d="m0,0a72,72 0 0 1-144,0 72,72 0 1 1 144,0z" id="pos"/>
    </defs>`;

const BACK_FOUR_CIRCLES = 
    `<use xlink:href="#pos" x="772" y="1670" fill="#808080"/>
    <use xlink:href="#pos" x="272" y="1347" fill="#2009ff"/>
    <use xlink:href="#pos" x="571" y="1447" fill="#2009ff"/>
    <use xlink:href="#pos" x="970" y="1446" fill="#2009ff"/>
    <use xlink:href="#pos" x="1272" y="1347" fill="#2009ff"/>`

const BACK_FOUR_LABELS = 
    `<tspan x="701.6" y="1798">[1]</tspan>
    <tspan x="203" y="1484.8">[2]</tspan>
    <tspan x="501.9" y="1591.7">[3]</tspan>
    <tspan x="901.2" y="1591.7">[4]</tspan>
    <tspan x="1200.5" y="1484.8">[5]</tspan>`


export const FOUR_THREE_THREE = `
    ${SVG_OPENING_TAG}
    ${CIRCLE_DEF}
    ${PITCH}

    <g stroke="#000" stroke-width="6">
        ${BACK_FOUR_CIRCLES}

        <use xlink:href="#pos" x="417" y="883" fill="#ff0"/>
        <use xlink:href="#pos" x="764" y="983" fill="#ff0"/>
        <use xlink:href="#pos" x="1152" y="883" fill="#ff0"/>

        <use xlink:href="#pos" x="774" y="193" fill="#f00"/>
        <use xlink:href="#pos" x="282" y="363" fill="#f00"/>
        <use xlink:href="#pos" x="1258" y="367" fill="#f00"/>
    </g>

    <text style="font-size:56px;font-style:normal;font-weight:normal;text-align:center;line-height:125%;text-anchor:middle;fill:#000;font-family:Bitstream Vera Sans">
        ${BACK_FOUR_LABELS}

        <tspan x="342.4" y="1016.2">[6]</tspan>
        <tspan x="689.8" y="1116.4">[7]</tspan>
        <tspan x="1081.4" y="1016.2">[8]</tspan>

        <tspan x="214.8" y="505.5">[9]</tspan>
        <tspan x="706.8" y="334.7">[10]</tspan>
        <tspan x="1191.4" y="508.6">[11]</tspan>
    </text>
    </svg>`;

export const FOUR_TWO_THREE_ONE = `
    ${SVG_OPENING_TAG}
    ${PITCH}
    ${CIRCLE_DEF}

    <g stroke="#000" stroke-width="6">
        ${BACK_FOUR_CIRCLES}

        <use xlink:href="#pos" x="319.1" y="580.9" fill="#ff0"/>
        <use xlink:href="#pos" x="1211.8" y="580.9" fill="#ff0"/>
        <use xlink:href="#pos" x="988.8" y="1076" fill="#ff0"/>
        <use xlink:href="#pos" x="551.8" y="1076" fill="#ff0"/>
        <use xlink:href="#pos" x="772" y="580.9" fill="#ff0"/>

        <use xlink:href="#pos" x="772" y="207.6" fill="#f00"/>
    </g>

    <text style="font-size:56px;text-align:center;line-height:125%;text-anchor:middle;fill:#000000;font-family:Bitstream Vera Sans" x="709.4" y="1871.6" linespacing="125%">
        ${BACK_FOUR_LABELS}

        <tspan x="480.1" y="1208.7">[6]</tspan>
        <tspan x="920.2" y="1208.7">[7]</tspan>
        <tspan x="244.7" y="719.5">[8]</tspan>
        <tspan x="701.6" y="719.5">[9]</tspan>
        <tspan x="1144" y="719.5">[10]</tspan>

        <tspan x="701.6" y="349.4">[11]</tspan>
    </text>
    </svg>`


export const FOUR_FOUR_TWO_DIAMOND = `
    ${SVG_OPENING_TAG}
    ${PITCH}
    ${CIRCLE_DEF}

    <g stroke="#000" stroke-width="6">

        ${BACK_FOUR_CIRCLES}

        <g fill="#ff0">
        <circle cx="328" cy="875" r="72"/>
        <circle cx="1076" cy="877" r="72"/>
        <circle cx="699" cy="652" r="72"/>
        <circle cx="699" cy="1098" r="72"/>

        <g fill="#f00">
        <circle cx="518" cy="260" r="72"/>
        <circle cx="892" cy="255" r="72"/>
        </g>
        </g>
    </g>

    <text style="font-size:56px;font-weight:normal;text-align:center;line-height:125%;text-anchor:middle;fill:#000;font-family:Bitstream Vera Sans">
        ${BACK_FOUR_LABELS}

        <tspan y="1230" x="700">[6]</tspan>
        <tspan x="323" y="1014">[7]</tspan>
        <tspan y="1017" x="1077">[8]</tspan>
        <tspan x="696" y="784">[9]</tspan>
        <tspan y="402" x="523">[10]</tspan>
        <tspan x="897" y="397">[11]</tspan>
    </text>
</svg>`

export const FOUR_FOUR_TWO = `
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 422 580" preserveAspectRatio="xMinYMin">
    <path d="M8,6h400.6v567H8z" fill="#393"/>
    <path d="M15.5,13.5h386v552h-386zM15.5,289.5h386M151.4,13.6v52.8h114.3v-52.8M95.3,13.6v106h226v-106M151.4,565.6v-52.8h114.3v52.8M95.3,565.6v-106h226v106M146,289.5a62.5,62.5 0 0 0 125,0a62.5,62.5 0 0 0-125,0" fill="none" stroke="#fff" stroke-width="1"/>
        <circle cx="139.5" cy="89.5" r="23" fill="#ff0d0d" stroke="#000" stroke-width="2.5"/>
        <circle cx="276" cy="89.5" r="23" fill="#ff0d0d" stroke="#000" stroke-width="2.5"/>
        <circle cx="67" cy="233.5" r="23" fill="#ff0" stroke="#000" stroke-width="2.5"/>
        <circle cx="147" cy="293.5" r="23" fill="#ff0" stroke="#000" stroke-width="2.5"/>
        <circle cx="263" cy="293.5" r="23" fill="#ff0" stroke="#000" stroke-width="2.5"/>
        <circle cx="346.5" cy="233.5" r="23" fill="#ff0" stroke="#000" stroke-width="2.5"/>
        <circle cx="57" cy="407" r="23" fill="#3b0dff" stroke="#000" stroke-width="2.5"/>
        <circle cx="268" cy="437" r="23" fill="#3b0dff" stroke="#000" stroke-width="2.5"/>
        <circle cx="147" cy="437" r="23" fill="#3b0dff" stroke="#000" stroke-width="2.5"/>
        <circle cx="361" cy="407" r="23" fill="#3b0dff" stroke="#000" stroke-width="2.5"/>
        <circle cx="210" cy="505" r="23" fill="#888" stroke="#000" stroke-width="2.5"/>
    
    <text style="font-size:18px;font-weight:normal;text-align:center;line-height:125%;text-anchor:middle;fill:#000;font-family:Bitstream Vera Sans">
        <tspan x="211.4" y="555">[1]</tspan>
        <tspan x="57.1" y="455">[2]</tspan>
        <tspan x="147.9" y="487.1">[3]</tspan>
        <tspan x="270" y="487.1">[4]</tspan>
        <tspan x="360.7" y="455">[5]</tspan>
        <tspan x="67.9" y="275.7">[6]</tspan>
        <tspan x="148.6" y="345">[7]</tspan>
        <tspan x="265.7" y="345">[8]</tspan>
        <tspan x="349.3" y="275.7">[9]</tspan>
        <tspan x="140" y="140.7">[10]</tspan>
        <tspan x="276.4" y="140.7">[11]</tspan>
    </text>
    </svg>`;
