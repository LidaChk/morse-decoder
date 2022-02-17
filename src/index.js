const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let MyMorseTable = {
        '**********': ' '
    };
    for (let [key, value] of Object.entries(MORSE_TABLE)) {
        MyMorseTable[key.replace(/['.']/g, '10').replace(/[-]/g, '11').padStart(10, '0')] = value
    };
    let ret = '';
    for (let i = 0; i < expr.length; i += 10) ret = ret + MyMorseTable[expr.substring(i, i + 10)];
    return ret;
}

module.exports = {
    decode
}