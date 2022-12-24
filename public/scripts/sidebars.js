let numBinaries = 12;

const initBinaryStr = () => {
    if (Math.random() < 0.6) {
        return '‎';
        // return '_ _ _ _ _';
    }
    let binStr = '';
    for (let i = 0; i < 9; i++){
        if (i == 4) {
            binStr += ' ';
            continue;
        }
        if (Math.random() >= 0.5) {
            binStr += '1';
        } else {
            binStr += '0';
        }
    }
    return binStr;
}

const populateBinStrs = (edge) => {
    for (let i = 0; i < numBinaries; i++) {
        let newElement = document.createElement("p");
        newElement.textContent = initBinaryStr();
        edge.append(newElement);
    }
}

const redoBinStrs = (edge) => {
    binStrs = edge.querySelectorAll("p");
    binStrs.forEach(textbox => textbox.textContent = initBinaryStr());
}

class binaries {
    constructor() {
        this.edges = document.querySelectorAll(".edge");
        this.edges.forEach(edge => populateBinStrs(edge));
        this._animate = this._animate.bind(this);
    }
    _animate() {
        this.edges.forEach(edge => redoBinStrs(edge));
    }
}

let binaryEffects = new binaries();
// erase all binary strings and readd them?
// add all from the start and phase some in and out of view after redoing contents each time
// setInterval(binaryEffects._animate(), 5000);
let binInterval = setInterval(binaryEffects._animate, 1000);