function same(arr, arrSquared) {
    // Accepts 2 arrays (not necessarily numbers)
    // Returns true if every value in the array has its corresponding value squared in the second array.
    // Frequency of the values must be the same (if 2 shows up in arr a single time, then 4 should show up in arrSquared a single time as well)
    if (arr.length !== arrSquared.length) return false 
    const squaredObj = {}
    for (let num of arr) {
        let numSqr = `${num * num}`
        squaredObj[numSqr] = squaredObj[numSqr] + 1 || 1
    }

    for (let sqr of arrSquared) {
        if (`${sqr}` in squaredObj) {
            squaredObj[`${sqr}`]--
        } else {
            return false
        }
    }
    
    for (let sqr of arrSquared) {
        if (squaredObj[sqr] !== 0) return false
    }
    return true
}

// console.log(same([5, 3, 2], [25, 9, 4])); // returns true
// console.log(same([1, 3, 3, 5], [25, 9, 1])) // returns false


function validAnagram(str1, str2){
    // Inputs: 2 strings
    // Outputs: boolean 
    // Check if 2 strings are anagrams 
    
    // Breakdown: 
    // Loop through first string and add all characters to 
    
    // Edge Cases:
    // What if there are spaces or non alpha-numerics 
    // What if strings are not the same length? Immediately false
     
    const letterCount = {}
    
    for (let i = 0; i < str1.length; i++) {
        str1[i] in letterCount ? letterCount[str1[i]]++ : letterCount[str1[i]] = 1
    }

    for (let letter of str2) {
        if (letterCount[letter] && letterCount[letter] > 0) {
          letterCount[letter]--
        } 
        else {
            return false
        }
    }

    for (let letter in letterCount) {
        if (letterCount[letter] !== 0) {
            return false
        }
    }
    return true
}

// console.log(validAnagram('', '')) // true
// console.log(validAnagram('aaz', 'zza')) // false
// console.log(validAnagram('anagram', 'nagaram')) // true
// console.log(validAnagram("rat","car")) // false)) // false
// console.log(validAnagram('awesome', 'awesom')) // false
// console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')) // false
// console.log(validAnagram('qwerty', 'qeywrt')) // true
// console.log(validAnagram('texttwisttime', 'timetwisttext')) // true