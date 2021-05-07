//Sum All Numbers in a Range
function sumAll(arr) {
    let sum = 0;
    const len = arr.length
    const arr2 = []
    let first = arr[0];
    let last = arr[len - 1];
    for (let i = first; i <= last; i++) {
        arr2[i] = i;
    }
    if (first < last) {
        for (let i = first; i <= last; i++) {
            sum += arr2[i]
        }
    } else {
        for (let i = arr[len - 1]; i <= arr[0]; i++) {
            arr2[i] = i
        }
        for (let i = arr[len - 1]; i <= arr[0]; i++) {
            sum += arr2[i]
        }
    }
    return sum
}

console.log(sumAll([10, 5]));
//Diff two arrays
function diffArray(arr1, arr2) {
    var newArr = [];
    newArr = arr1
        .filter(x => !arr2.includes(x))
        .concat(arr2.filter(x => !arr1.includes(x)));
    return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
//Seek and Destroy
function destroyer(arr) {
    var valsToRemove = Array.from(arguments).slice(1);
    return arr.filter(function(val) {
        return !valsToRemove.includes(val);
    });
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
//Wherefore art thou
function whatIsInAName(collection, source) {
    // Only change code below this line
    var srcKeys = Object.keys(source);

    return collection.filter(function(obj) {
        return srcKeys.every(function(key) {
            return obj.hasOwnProperty(key) && obj[key] === source[key];
        });
    });
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
//Spinal the case
function spinalCase(str) {
    return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase()
}

console.log(spinalCase('AllThe-small Things'));
//Pig Latin
function translatePigLatin(str) {
    let consonantRegex = /^[^aeiou]+/;
    let consonants = str.match(consonantRegex);
    return consonants !== null ?
        str
        .replace(consonantRegex, "")
        .concat(consonants)
        .concat("ay") :
        str.concat("way");
}

console.log(translatePigLatin("glove"));
//Search and replace
function myReplace(str, before, after) {
    let first = before.charAt(0)
    let len = str.length
    let second = after.charAt(0)
    let secUp = second.toUpperCase()
    let changed = after.substring(1, len)
    let secLo = second.toLowerCase()

    if (first === first.toUpperCase())
        return str.replace(before, secUp.concat(changed))
    else
        return str.replace(before, secLo.concat(changed))

}

console.log(myReplace("I think we should look up there", "up", "Down"));
//DNA Pairing
function pairElement(str) {
    var pairs = {
        A: "T",
        T: "A",
        C: "G",
        G: "C"
    };
    //split string into array of characters
    var arr = str.split("");
    //map character to array of character and matching pair
    return arr.map(x => [x, pairs[x]]);
}

console.log(pairElement("GCG"));
//Missing letters
function fearNotLetter(str) {
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i)
        if (code !== str.charCodeAt(0) + i) {
            return String.fromCharCode(code - 1)
        }
    }
    return undefined;
}

console.log(fearNotLetter("abce"));
//Sorted Union
//The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// A set is a collection of items which are unique i.e no element can be repeated
function uniteUnique(...arr) {
    return [...new Set(arr.flat())];
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

//Convert HTML Entities
function convertHTML(str) {
    let html = str.split('');
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '&')
            html[i] = '&amp;'
        else if (str[i] === '<')
            html[i] = '&lt;'
        else if (str[i] === '>')
            html[i] = '&gt;'
        else if (str[i] === '"')
            html[i] = '&quot;'
        else if (str[i] === "'")
            html[i] = '&apos;'
    }
    return html.join('');
}

console.log(convertHTML("Dolce & Gabbana"));
//Sum All Odd Fibonacci Numbers
function sumFibs(num) {
    let prevNumber = 0;
    let currNumber = 1;
    let sum = 0;
    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            sum += currNumber;
        }
        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
    }

    return sum;
}

console.log(sumFibs(4));
//function sumPrimes(num) {
let sum = 0
for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
        sum += i
    }
}
return sum;
}

function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}
console.log(sumPrimes(10));
//Smallest common multiple
function smallestCommons(arr) {
    const [min, max] = arr.sort((a, b) => a - b);
    const range = Array(max - min + 1)
        .fill(0)
        .map((_, i) => i + min);
    const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);

    return range.reduce((multiple, curr) => lcm(multiple, curr));
}

console.log(smallestCommons([1, 5]));

//Drop it
function dropElements(arr, func) {
    while (arr.length > 0 && !func(arr[0])) {
        arr.shift()
    }
    return arr;
}

console.log(dropElements([1, 2, 3, 4], function(n) { return n >= 3; }));

//Steamroller
function steamrollArray(arr) {
    var result = [];
    var stack = arr,
        first;

    while (stack.length > 0) {
        first = stack[0];
        if (Array.isArray(first)) {
            // Replace the nested array with its items
            arr.splice.apply(stack, [0, 1].concat(first));
        } else {
            result.push(first);
            // Delete the first item
            stack.shift();
        }
    }

    return result;
}

console.log(steamrollArray([1, [2],
    [3, [
        [4]
    ]]
]));
//Binary Agents
function binaryAgent(str) {
    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i)

    }
    return String.fromCharCode(...str.split(' ').map((char) => parseInt(char, 2)));
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

//Everything Be True
function truthCheck(collection, pre) {
    const arr = []
    for (let i = 0; i < collection.length; i++) {
        if (!collection[i][pre])
            arr.push(collection[i])
    }
    if (arr.length === 0)
        return true
    return false
}

console.log(truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex"));

//Arguments Optional
function addTogether() {
    function checkNum(num) {
        return (typeof num === "number");
    };

    if (arguments.length === 2) {
        let first = arguments[0];
        let second = arguments[1];
        if (checkNum(first) && checkNum(second)) {
            return first + second;
        } else {
            return undefined;
        }
    } else if (arguments.length === 1) {
        let first = arguments[0];
        if (checkNum(first)) {
            function addSecond(second) {
                if (checkNum(second)) {
                    return first + second;
                } else {
                    return undefined;
                }
            };
            return addSecond;
        } else {
            return undefined;
        }
    }
}

console.log(addTogether(3))
    //Make a Person
var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    let lt = firstAndLast.split(" ");
    this.getFullName = function() {
        return lt[0] + " " + lt[1];
    }
    this.getFirstName = function() {
        return lt[0];
    }
    this.getLastName = function() {
        return lt[1];
    }
    this.setFirstName = function(input) {
        return lt[0] = input;
    }
    this.setLastName = function(input) {
        return lt[1] = input;
    }
    this.setFullName = function(input) {
        let rt = input.split(" ");
        lt[0] = rt[0];
        lt[1] = rt[1];

    }
};

var bob = new Person('Bob Ross');
//function orbitalPeriod(arr) {
var GM = 398600.4418;
var earthRadius = 6367.4447;
var a = 2 * Math.PI;
var newArr = [];

var getOrbPeriod = function(obj) {
    var c = Math.pow(earthRadius + obj.avgAlt, 3);
    var b = Math.sqrt(c / GM);
    var orbPeriod = Math.round(a * b);
    // create new object
    return { name: obj.name, orbitalPeriod: orbPeriod };
};

for (var elem in arr) {
    newArr.push(getOrbPeriod(arr[elem]));
}

return newArr;
}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));