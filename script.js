const fs = require('fs');

function readJSON(filename) {
    const data = fs.readFileSync(filename, 'utf8');
    return JSON.parse(data);
}


function decodeValue(base, value) {
    return parseInt(value, base);
}

function getXYPairs(jsonData) {
    let pairs = [];
    
    for (let key in jsonData) {
        if (key !== "keys") {
            let x = parseInt(key);
            let y = decodeValue(jsonData[key].base, jsonData[key].value);
            pairs.push({ x, y });
        }
    }
    
    return pairs;
}


function lagrangeInterpolation(pairs, k) {
    let c = 0;

    for (let i = 0; i < k; i++) {
        let xi = pairs[i].x;
        let yi = pairs[i].y;
        let term = yi;

        for (let j = 0; j < k; j++) {
            if (i !== j) {
                let xj = pairs[j].x;
                term *= (0 - xj) / (xi - xj);
            }
        }

        c += term;
    }

    return Math.round(c);
}

function solveTestCase(filename) {
    const jsonData = readJSON(filename);
    const k = jsonData.keys.k;
    const pairs = getXYPairs(jsonData);

    return lagrangeInterpolation(pairs, k);
}

const secret1 = solveTestCase('testcase1.json');
const secret2 = solveTestCase('testcase2.json');

console.log(`Secret for Test Case 1: ${secret1}`);
console.log(`Secret for Test Case 2: ${secret2}`);