import Typed from "typed.js";  

class Terminal {
    constructor(data, lineHeight) {
        this.sidebar = document.querySelector("#sidebar");
        this.numRows = Math.floor(sidebar.offsetHeight / lineHeight);
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
        this.sidebar.append(container);
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

let notepad = document.getElementById("notepad");
let projectIDs = ["NYC", "Matrix", "VR", "Webpage"];

const openNotepad = (id) => {
    let currDescription = notepad.querySelector(".project-description");
    if (currDescription !== null && currDescription.id === id) {  // correct description already rendered
        notepad.style.display = "initial";
        return;
    } 
    else if (currDescription !== null) {
        currDescription.style.display = "none";  // hide description
        document.body.append(currDescription);  // move description to end of document
    }
    let description = document.getElementById(id);
    description.style.display = "initial";
    notepad.querySelector("#description-box").appendChild(description);
    notepad.style.display = "initial";
}

// Add onClick function to each folder icon to open corresponding description in a div
let projectContainers = document.querySelectorAll(".project-container");
for (let i = 0; i < projectContainers.length; i++) {
    projectContainers[i].addEventListener("click", function() {
        openNotepad(projectIDs[i])
    });
}
 
// Add onClick to description window controls to close descriptions
notepad.querySelector(".window-controls").addEventListener("click", function() {
    notepad.style.display = "none";
})


// Set margin underneath header content based on display characteristics
let header = document.querySelector("#header-container");
let sidebarContainer = document.querySelector("#sidebar-container");
if (sidebarContainer.offsetHeight > header.offsetHeight) {
    header.style.marginBottom = "5rem";
} else {
    header.style.marginBottom = "1rem";
}