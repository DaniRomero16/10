let string1 = 'Marta';
let string2 = 'Daniel';
let array = new Array(5,7,8,'d','t');

function ej1(string, pos) {
    return string.charAt(pos);
}

function ej2(string1, string2) {
    return string1 + string2;
}

console.log(array.toString());

console.log(string1.endsWith('a'));

console.log(string1.localeCompare(string1));

let newArray2 = new Array();

for (let i = (string1.length - 1); i >= 0; i--) {
    newArray2.push(string1[i]);
};

console.log(newArray2);