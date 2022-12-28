import Typed from "typed.js";  

class Terminal {
    constructor(data, lineHeight) {
        this.sidebar = document.querySelector("#sidebar");
        this.numRows = Math.floor(sidebar.offsetHeight / lineHeight) - 1;
        this.numBlank = this.numRows;
        this.data = data;
        this.totalLines = data.length;
        this.printedLines = 0;
        this.currLine;
    }

    _createLine() {
        if (this.numBlank === 0) {
            this.sidebar.querySelector(".assembly-container").remove();
        } else {
            (this.numBlank -= 1);
        }
        let container = document.createElement("div");
        container.classList.add("assembly-container");
        sidebar.append(container);
        let elem = document.createElement("span");
        elem.classList.add("assembly");
        container.append(elem);
        this.currLine = elem;
    }
    
    _type() {
        if (this.printedLines === this.totalLines) {
            return;
        }
        let instruction = this.data[this.printedLines];
        this.printedLines++;
        this._createLine();
        let that = this;
        let line = this.currLine;
        new Typed(line, {
            strings: [instruction],
            typeSpeed: 20,
            cursorChar: '\u2583',
            onComplete: function() {
                line.parentNode.querySelector(".typed-cursor").style.display = 'none';
                that._type();
            }
        });
    }
}

const fetchLines = async () => {
    let response = await fetch("./disassembly.txt");
    let text = await response.text();
    return text.split("\n");
}

// 9px between lines
// 14 px font
let lineHeight = 23; 

let terminal;
fetchLines().then(data => { 
    terminal = new Terminal(data, lineHeight);
    terminal._type();
});