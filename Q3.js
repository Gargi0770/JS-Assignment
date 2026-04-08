function runQ3() {

let N = parseInt(prompt("Enter N:"));
let K = parseInt(prompt("Enter K:"));

function isPalindrome(num) {
    let str = num.toString();
    let rev = str.split("").reverse().join("");
    return str === rev;
}

let result = -1;

for (let X = 0; X <= 100000; X++) {

    let value = N + X;

    if (value % K === 0 && isPalindrome(value)) {
        result = X;
        break;
    }
}

alert(result);

}
