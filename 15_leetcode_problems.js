// ╔══════════════════════════════════════════════════════════════════════╗
// ║          15 LEETCODE PROBLEMS — CHAI AUR CODE STYLE 🍵              ║
// ║     Arrays | Strings | Loops/Logic  —  Lecture 1–35 ke baad        ║
// ╚══════════════════════════════════════════════════════════════════════╝
//
//  Run karo:  node "15_leetcode_problems.js"
//
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  SECTION 1 ▶  A R R A Y S
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// ┌──────────────────────────────────────────────────────────────────────┐
// │  #1  TWO SUM  (LC 1)                                                │
// │  Kisi bhi do numbers ka sum target ke barabar ho — unke index do.   │
// └──────────────────────────────────────────────────────────────────────┘
//
//  Example:  nums = [2, 7, 11, 15],  target = 9
//  Output:   [0, 1]   (kyunki 2 + 7 = 9)
//
//  Approach: Har number ke liye check karo ki uska "complement" (target - num)
//  pehle se map me hai ya nahi. Hai toh dono ke index return karo.

function twoSum(nums, target) {
    const seen = new Map();           // Lecture 28 wala Map yaad hai? Kaam aaya!

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (seen.has(complement)) {
            return [seen.get(complement), i]; // Dono index return
        }
        seen.set(nums[i], i);         // Current number aur uska index save karo
    }
    return [];
}

console.log("\n╔══════════ #1  TWO SUM ══════════╗");
console.log("Input : [2, 7, 11, 15], target = 9");
console.log("Output:", twoSum([2, 7, 11, 15], 9));   // [0, 1]
console.log("Input : [3, 2, 4],      target = 6");
console.log("Output:", twoSum([3, 2, 4], 6));         // [1, 2]


// ┌──────────────────────────────────────────────────────────────────────┐
// │  #2  RUNNING SUM OF 1D ARRAY  (LC 1480)                            │
// │  Har index par us se pehle ke saare numbers ka sum rakhna.          │
// └──────────────────────────────────────────────────────────────────────┘
//
//  Example:  nums = [1, 2, 3, 4]
//  Output:   [1, 3, 6, 10]
//
//  Approach: Lecture 12 ka Array loop — har element me pichle wala joddo.

function runningSum(nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] = nums[i] + nums[i - 1]; // Pichle running sum me current add karo
    }
    return nums;
}

console.log("\n╔══════════ #2  RUNNING SUM ══════════╗");
console.log("Input : [1, 2, 3, 4]");
console.log("Output:", runningSum([1, 2, 3, 4]));     // [1, 3, 6, 10]
console.log("Input : [1, 1, 1, 1, 1]");
console.log("Output:", runningSum([1, 1, 1, 1, 1]));  // [1, 2, 3, 4, 5]


// ┌──────────────────────────────────────────────────────────────────────┐
// │  #3  SHUFFLE THE ARRAY  (LC 1470)                                  │
// │  [x1,x2,x3, y1,y2,y3]  →  [x1,y1, x2,y2, x3,y3]                  │
// └──────────────────────────────────────────────────────────────────────┘
//
//  Example:  nums = [2,5,1,3,4,7], n = 3
//  Output:   [2,3, 5,4, 1,7]
//
//  Approach: Ek nayi array banao aur x aur y wali position se ek ek utha ke daalte jao.

function shuffle(nums, n) {
    const result = [];

    for (let i = 0; i < n; i++) {
        result.push(nums[i]);     // x wala (pehli aadhi)
        result.push(nums[i + n]); // y wala (doosri aadhi)
    }
    return result;
}

console.log("\n╔══════════ #3  SHUFFLE THE ARRAY ══════════╗");
console.log("Input : [2,5,1,3,4,7], n=3");
console.log("Output:", shuffle([2, 5, 1, 3, 4, 7], 3)); // [2,3,5,4,1,7]


// ┌──────────────────────────────────────────────────────────────────────┐
// │  #4  CONCATENATION OF ARRAY  (LC 1929)                             │
// │  Array ko khud se jod do — double kar do.                           │
// └──────────────────────────────────────────────────────────────────────┘
//
//  Example:  nums = [1, 2, 1]
//  Output:   [1, 2, 1, 1, 2, 1]
//
//  Approach: Lecture 13 ka Spread Operator — sab se asaan!

function getConcatenation(nums) {
    return [...nums, ...nums]; // Spread operator ka direct use
}

console.log("\n╔══════════ #4  CONCATENATION OF ARRAY ══════════╗");
console.log("Input : [1, 2, 1]");
console.log("Output:", getConcatenation([1, 2, 1])); // [1, 2, 1, 1, 2, 1]
console.log("Input : [1, 3, 2, 1]");
console.log("Output:", getConcatenation([1, 3, 2, 1]));


// ┌──────────────────────────────────────────────────────────────────────┐
// │  #5  BUILD ARRAY FROM PERMUTATION  (LC 1920)                       │
// │  ans[i] = nums[nums[i]]  — index ke andar jo number hai us par jao │
// └──────────────────────────────────────────────────────────────────────┘
//
//  Example:  nums = [0, 2, 1, 5, 3, 4]
//  Output:   [0, 1, 2, 4, 5, 3]
//
//  Approach: Map method (Lecture 32) — har element ko transform karo.

function buildArray(nums) {
    return nums.map((val) => nums[val]); // nums[i] wali jagah nums[nums[i]] daal do
}

console.log("\n╔══════════ #5  BUILD ARRAY FROM PERMUTATION ══════════╗");
console.log("Input : [0, 2, 1, 5, 3, 4]");
console.log("Output:", buildArray([0, 2, 1, 5, 3, 4])); // [0, 1, 2, 4, 5, 3]


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  SECTION 2 ▶  S T R I N G S
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// ┌──────────────────────────────────────────────────────────────────────┐
// │  #6  REVERSE STRING  (LC 344)                                       │
// │  Array of characters ko ulta karo — IN PLACE.                      │
// └──────────────────────────────────────────────────────────────────────┘
//
//  Example:  s = ['h','e','l','l','o']
//  Output:   ['o','l','l','e','h']
//
//  Approach: Two Pointer — ek start se, ek end se — dono swap karo aur andar aao.

function reverseString(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Swap karo (Destructuring trick — Lecture 15 yaad hai?)
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
    return s; // In-place change ho gaya
}

console.log("\n╔══════════ #6  REVERSE STRING ══════════╗");
console.log("Input : ['h','e','l','l','o']");
console.log("Output:", reverseString(['h', 'e', 'l', 'l', 'o'])); // ['o','l','l','e','h']


// ┌──────────────────────────────────────────────────────────────────────┐
// │  #7  PALINDROME NUMBER  (LC 9)                                      │
// │  Number ulta bhi same hai? True ya False do.                        │
// └──────────────────────────────────────────────────────────────────────┘
//
//  Example:  x = 121  → true
//            x = -121 → false (negative kabhi palindrome nahi hota)
//
//  Approach: Number ko string banao (Lecture 9 String methods), ulto, compare karo.

function isPalindrome(x) {
    if (x < 0) return false; // Negative numbers kabhi palindrome nahi hote

    const str = x.toString();
    const reversed = str.split('').reverse().join('');
    return str === reversed; // Strict equality check (Lecture 6 yaad hai?)
}

console.log("\n╔══════════ #7  PALINDROME NUMBER ══════════╗");
console.log("Input : 121  → Output:", isPalindrome(121));  // true
console.log("Input : -121 → Output:", isPalindrome(-121)); // false
console.log("Input : 10   → Output:", isPalindrome(10));   // false


// ┌──────────────────────────────────────────────────────────────────────┐
// │  #8  JEWELS AND STONES  (LC 771)                                    │
// │  Kitne stones actually jewels hain — count karo.                    │
// └──────────────────────────────────────────────────────────────────────┘
//
//  Example:  jewels = "aA",  stones = "aAAbbbb"
//  Output:   3
//
//  Approach: Stones par loop, har stone check karo ki jewels me hai ya nahi.

function numJewelsInStones(jewels, stones) {
    let count = 0;

    for (const stone of stones) {           // Lecture 28 — for...of string par!
        if (jewels.includes(stone)) {       // Lecture 12 — includes() method
            count++;
        }
    }
    return count;
}

console.log("\n╔══════════ #8  JEWELS AND STONES ══════════╗");
console.log('Input : jewels="aA", stones="aAAbbbb"');
console.log("Output:", numJewelsInStones("aA", "aAAbbbb")); // 3
console.log('Input : jewels="z",  stones="ZZ"');
console.log("Output:", numJewelsInStones("z", "ZZ"));        // 0


// ┌──────────────────────────────────────────────────────────────────────┐
// │  #9  DEFANGING AN IP ADDRESS  (LC 1108)                            │
// │  "." ko "[.]" se replace karo IP address me.                       │
// └──────────────────────────────────────────────────────────────────────┘
//
//  Example:  address = "1.1.1.1"
//  Output:   "1[.]1[.]1[.]1"
//
//  Approach: Lecture 9 ka replace() method — seedha use karo!

function defangIPaddr(address) {
    return address.replaceAll('.', '[.]'); // replaceAll saare dots replace karega
}

console.log("\n╔══════════ #9  DEFANGING IP ADDRESS ══════════╗");
console.log('Input : "1.1.1.1"');
console.log("Output:", defangIPaddr("1.1.1.1"));         // "1[.]1[.]1[.]1"
console.log('Input : "255.100.50.0"');
console.log("Output:", defangIPaddr("255.100.50.0"));    // "255[.]100[.]50[.]0"


// ┌──────────────────────────────────────────────────────────────────────┐
// │  #10  GOAL PARSER  (LC 1678)                                        │
// │  "()" → "o",  "(al)" → "al",  "G" → "G"                           │
// └──────────────────────────────────────────────────────────────────────┘
//
//  Example:  command = "G()(al)"
//  Output:   "Goal"
//
//  Approach: String replace chain — Lecture 9 wala replace method!

function interpret(command) {
    return command
        .replaceAll('()', 'o')    // "()" ko "o" se badlo
        .replaceAll('(al)', 'al'); // "(al)" ko "al" se badlo
}

console.log("\n╔══════════ #10  GOAL PARSER ══════════╗");
console.log('Input : "G()(al)"');
console.log("Output:", interpret("G()(al)"));       // "Goal"
console.log('Input : "G()()()()(al)"');
console.log("Output:", interpret("G()()()()(al)")); // "Gooooal"


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  SECTION 3 ▶  L O O P S  /  L O G I C
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// ┌──────────────────────────────────────────────────────────────────────┐
// │  #11  FIZZ BUZZ  (LC 412)                                           │
// │  3 ka multiple → "Fizz", 5 ka → "Buzz", dono → "FizzBuzz"         │
// └──────────────────────────────────────────────────────────────────────┘
//
//  Example:  n = 5
//  Output:   ["1","2","Fizz","4","Buzz"]
//
//  Approach: Lecture 26 ka for loop + Lecture 23 ka if-else.

function fizzBuzz(n) {
    const result = [];

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(String(i));
        }
    }
    return result;
}

console.log("\n╔══════════ #11  FIZZ BUZZ ══════════╗");
console.log("Input : n = 5");
console.log("Output:", fizzBuzz(5));  // ["1","2","Fizz","4","Buzz"]
console.log("Input : n = 15");
console.log("Output:", fizzBuzz(15));


// ┌──────────────────────────────────────────────────────────────────────┐
// │  #12  COUNT ODD NUMBERS  (LC 1523)                                 │
// │  [low, high] range me kitne odd numbers hain?                       │
// └──────────────────────────────────────────────────────────────────────┘
//
//  Example:  low = 3, high = 7
//  Output:   3   (3, 5, 7)
//
//  Approach: Math trick — loop lagane ki zaroorat nahi!
//  Agar low ya high odd hai toh ek extra odd milta hai.

function countOdds(low, high) {
    let count = Math.floor((high - low) / 2);
    if (low % 2 !== 0 || high % 2 !== 0) count++; // Koi ek odd endpoint ho toh +1
    return count;
}

console.log("\n╔══════════ #12  COUNT ODD NUMBERS ══════════╗");
console.log("Input : low=3, high=7");
console.log("Output:", countOdds(3, 7));   // 3
console.log("Input : low=8, high=10");
console.log("Output:", countOdds(8, 10));  // 1


// ┌──────────────────────────────────────────────────────────────────────┐
// │  #13  AVERAGE SALARY EXCLUDING MIN AND MAX  (LC 1491)              │
// │  Minimum aur Maximum salary nikaal do, baaki ka average do.         │
// └──────────────────────────────────────────────────────────────────────┘
//
//  Example:  salary = [4000, 3000, 1000, 2000]
//  Output:   2500.0
//
//  Approach: Math.min, Math.max (Lecture 10!) + Reduce (Lecture 33!)

function average(salary) {
    const minSal = Math.min(...salary); // Spread operator se Math.min me pass karo
    const maxSal = Math.max(...salary);

    const total = salary.reduce((acc, curr) => acc + curr, 0); // Reduce from Lecture 33
    const avg = (total - minSal - maxSal) / (salary.length - 2);

    return avg;
}

console.log("\n╔══════════ #13  AVERAGE SALARY ══════════╗");
console.log("Input : [4000, 3000, 1000, 2000]");
console.log("Output:", average([4000, 3000, 1000, 2000])); // 2500
console.log("Input : [6000, 5000, 4000, 3000, 2000, 1000]");
console.log("Output:", average([6000, 5000, 4000, 3000, 2000, 1000])); // 3500


// ┌──────────────────────────────────────────────────────────────────────┐
// │  #14  KIDS WITH CANDIES  (LC 1431)                                 │
// │  Extra candies milne ke baad kisi ke paas maximum honge? True/False │
// └──────────────────────────────────────────────────────────────────────┘
//
//  Example:  candies = [2,3,5,1,3], extraCandies = 3
//  Output:   [true, true, true, false, true]
//
//  Approach: Pehle max dhundo, phir Map se check karo (Lecture 32!)

function kidsWithCandies(candies, extraCandies) {
    const maxCandies = Math.max(...candies); // Sabse zyada candies kisi ke paas

    return candies.map((candy) => candy + extraCandies >= maxCandies);
    // Har bachche ke paas extra milane ke baad max se compare karo
}

console.log("\n╔══════════ #14  KIDS WITH CANDIES ══════════╗");
console.log("Input : candies=[2,3,5,1,3], extraCandies=3");
console.log("Output:", kidsWithCandies([2, 3, 5, 1, 3], 3)); // [true,true,true,false,true]
console.log("Input : candies=[4,2,1,1,2], extraCandies=1");
console.log("Output:", kidsWithCandies([4, 2, 1, 1, 2], 1)); // [true,false,false,false,false]


// ┌──────────────────────────────────────────────────────────────────────┐
// │  #15  RICHEST CUSTOMER WEALTH  (LC 1672)                           │
// │  2D array — sabse ameer customer ka total wealth nikalo.            │
// └──────────────────────────────────────────────────────────────────────┘
//
//  Example:  accounts = [[1,2,3],[3,2,1]]
//  Output:   6
//
//  Approach: Har row ka sum nikalo (Reduce!), phir Math.max se sabse bara dhundo.

function maximumWealth(accounts) {
    // Har customer ki wealth = uske accounts ka sum
    const wealths = accounts.map((customer) =>
        customer.reduce((acc, curr) => acc + curr, 0) // Lecture 33 Reduce!
    );

    return Math.max(...wealths); // Sabse ameer customer ka wealth
}

console.log("\n╔══════════ #15  RICHEST CUSTOMER WEALTH ══════════╗");
console.log("Input : [[1,2,3],[3,2,1]]");
console.log("Output:", maximumWealth([[1, 2, 3], [3, 2, 1]]));        // 6
console.log("Input : [[1,5],[7,3],[3,5]]");
console.log("Output:", maximumWealth([[1, 5], [7, 3], [3, 5]]));      // 10
console.log("Input : [[2,8,7],[7,1,3],[1,9,5]]");
console.log("Output:", maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]])); // 17


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//
//   🍵  Chai aur Code — Problems Summary
//
//   ARRAYS   : twoSum | runningSum | shuffle | getConcatenation | buildArray
//   STRINGS  : reverseString | isPalindrome | numJewelsInStones | defangIPaddr | interpret
//   LOGIC    : fizzBuzz | countOdds | average | kidsWithCandies | maximumWealth
//
//   Concepts used from Lectures 1–35:
//   → Lecture 9  : String methods (replace, split, join)
//   → Lecture 10 : Math.min, Math.max
//   → Lecture 12 : Array methods (includes, push)
//   → Lecture 13 : Spread operator, flat
//   → Lecture 15 : Destructuring
//   → Lecture 26 : for loop, break/continue
//   → Lecture 28 : for...of, Map
//   → Lecture 30 : forEach
//   → Lecture 31 : filter
//   → Lecture 32 : map
//   → Lecture 33 : reduce
//
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
