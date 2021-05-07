//pallindrome checker
function palindrome(str) {
    const changedStr = str.replace(/[-&\/\\#,+()$~%.'":*?<>{}_ ]/g, '');
    //console.log(changedStr)
    const low = changedStr.toLowerCase()
        //console.log(low)
    const rev = low.match(/[a-z0-9]/g).reverse().join('');

    if (low === rev)
        return true;
    return false;
}



console.log(palindrome("0_0 (: /-\ :) 0-0"));

//Roman Numeral Converter
var convertToRoman = function(num) {
    var decimalVal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanVal = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I"
    ];

    let roman = "";

    for (let i = 0; i < decimalVal.length; i++) {
        while (decimalVal[i] <= num) {
            roman += romanVal[i];
            num -= decimalVal[i];
        }
    }

    return roman;
};

console.log(convertToRoman(36));

//Caesar's cipher
function rot13(str) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return str.split('')
        .map(char => {
            const index = alphabet.indexOf(char)
            return (index >= 0) ? alphabet[(index + 13) % 26] :
                char
        })
        .join("")

}

console.log(rot13("SERR PBQR PNZC"));

//Telephone Number Validator
function telephoneCheck(str) {
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str)
}

console.log(telephoneCheck("555-555-5555"));
/*
^ denotes the beginning of the string.
(1\s?)? allows for “1” or "1 " if there is one.
\d{n} checks for exactly n number of digits so \d{3} checks for three digits.
x|y checks for either x OR y so (\(\d{3}\)|\d{3}) checks for either three digits surrounded by parentheses, or three digits by themselves with no parentheses.
[\s\-]? checks for spaces or dashes between the groups of digits.
$ denotes the end of the string. In this case the beginning ^ and end of the string $ are used in the regex to prevent it from matching any longer string that might contain a valid phone number (eg. “s 555 555 5555 3”).
 */

//Cash Register
const denom = [
    { name: "ONE HUNDRED", val: 100.0 },
    { name: "TWENTY", val: 20.0 },
    { name: "TEN", val: 10.0 },
    { name: "FIVE", val: 5.0 },
    { name: "ONE", val: 1.0 },
    { name: "QUARTER", val: 0.25 },
    { name: "DIME", val: 0.1 },
    { name: "NICKEL", val: 0.05 },
    { name: "PENNY", val: 0.01 }
];

function checkCashRegister(price, cash, cid) {
    let output = { status: null, change: [] };
    let change = cash - price;

    let register = cid.reduce(
        function(acc, curr) {
            acc.total += curr[1];
            acc[curr[0]] = curr[1];
            return acc;
        }, { total: 0 }
    );

    // Handle exact change
    if (register.total === change) {
        output.status = "CLOSED";
        output.change = cid;
        return output;
    }

    // Handle obvious insufficient funds
    if (register.total < change) {
        output.status = "INSUFFICIENT_FUNDS";
        return output;
    }

    // Loop through the denomination array
    let change_arr = denom.reduce(function(acc, curr) {
        let value = 0;
        // While there is still money of this type in the drawer
        // And while the denomination is larger than the change remaining
        while (register[curr.name] > 0 && change >= curr.val) {
            change -= curr.val;
            register[curr.name] -= curr.val;
            value += curr.val;

            // Round change to the nearest hundreth deals with precision errors
            change = Math.round(change * 100) / 100;
        }
        // Add this denomination to the output only if any was used.
        if (value > 0) {
            acc.push([curr.name, value]);
        }
        return acc; // Return the current change_arr
    }, []); // Initial value of empty array for reduce

    // If there are no elements in change_arr or we have leftover change, return
    // the string "Insufficient Funds"
    if (change_arr.length < 1 || change > 0) {
        output.status = "INSUFFICIENT_FUNDS";
        return output;
    }

    // Here is your change, ma'am.
    output.status = "OPEN";
    output.change = change_arr;
    return output;
}

console.log(checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]));