function runQ5() {

let N = parseInt(prompt("Enter N:"));
let seed = parseInt(prompt("Enter seed:"));

let sum = 0;
let m = 0;
let skip = seed + 2;

// keep going until sum ≥ N
while (sum < N) {

    m++;

    // skip multiples of (seed + 2)
    if (m % skip !== 0) {
        sum += m;
    }
}

alert(m + " " + sum);

}
