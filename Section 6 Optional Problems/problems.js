function findLongestSubstring(str){
    // Input: String
    // Output: Length of longest substring with distinct characters
    
    // Breakdown: Sliding Window
    // Set ptr1 to beginning of string.
    // Loop through the string. At each character, add the character to an object. 
    // If the character is not already in the object, continue. If it is already at the object, this is not a distinct character.
        // If not a distinct character, check if the diff between i and ptr1. if it is greater than "longest", update longest.
        // Reset the map, move ptr1 to i, and continue looping til the end.
    let longest = 0
    let ptr = 0
    let map = {}
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase()
        if (map[char]) {
            map = {}
            if (i - ptr > longest) longest = i - ptr
            ptr = i
        } 
        
        if (!map[char] && i === str.length - 1) {
            if (i - ptr + 1 > longest) longest = i - ptr + 1
        }
        map[char] = true
        
    }
    return longest
}
// [0, 3, 3, 3, 5, 4]
let arr = ['', 'aabc', 'abcc', 'abcabc', 'aabbbbbcdea', 'abc ada', 'tweet twat']
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], findLongestSubstring(arr[i]))
}

