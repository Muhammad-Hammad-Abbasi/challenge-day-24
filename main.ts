// Day 24

// ### Question 1: *Generate Fibonacci Sequence*
// Write a function generateFibonacci(n: number): number[] that generates and returns the first n numbers of the Fibonacci sequence. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the previous two.

// *Hint:* Use a loop or recursion to build the sequence.

// *Example:*
// typescript
// generateFibonacci(5); // Output: [0, 1, 1, 2, 3]
// generateFibonacci(7); // Output: [0, 1, 1, 2, 3, 5, 8]

function generate_Fibonacci(n: number): number[] {
    
    let a = 0;
    let b = 1;

    let result: number[]= [];
    result.push(a);
    
    if (n > a) {
        result.push(b)
    }

    for(let i = 2; i < n; i++) {
        let next = a + b
        result.push(next)

        a = b
        b = next
    }
    return result;

}

console.log(generate_Fibonacci(5)); // Output: [0, 1, 1, 2, 3]
console.log(generate_Fibonacci(7)); // Output: [0, 1, 1, 2, 3, 5, 8]


// ### Question 2: *Replace Vowels with Asterisks*
// Write a function replaceVowels(str: string): string that takes a string str and returns a new string where all vowels (a, e, i, o, u) are replaced with asterisks (*). The function should be case-insensitive.

// *Hint:* You can use a loop or a regular expression to find and replace vowels.

// *Example:*
// typescript
// replaceVowels('Hello World'); // Output: 'H*ll* W*rld'
// replaceVowels('TypeScript');  // Output: 'Typ*Scr*pt'

function replace_Vowels(str: string): string {

    let result_1 = "";
    let vowels = ['e','a','i','o','u'];

    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase()

        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            result_1 += "*"
        }
        else {
            result_1 += str[i]
        }
    }
    return result_1;
};

console.log(replace_Vowels('Hello World')); // Output: 'H*ll* W*rld'
console.log(replace_Vowels('TypeScript'));  // Output: 'Typ*Scr*pt'








