// Array of 10 strings
let strings = ["apple", "banana", "orange", "strawberry", "blueberry", "pineapple", "watermelon", "kiwi", "grape", "pomegranate"];

function findLongestString(array) {
    let longest = "";
    for (let str of array) {
        if (str.length > longest.length) {
            longest = str;
        }
    }
    return longest;
}

// Call the function and print the result
let longestString = findLongestString(strings);
console.log("Longest string:", longestString);
