const fs = require('fs');

let content = fs.readFileSync('src/top-section.tsx', 'utf-8');

// The injected block says BUILDING HYSTERESIS IN AI. We want it to say BUILDING FORMANT SOTA IN AI or just FORMANT AI
// Let's replace the data-characters to say FORMANT AI.

// First let's just find and replace the letters.
// The sequence of letters is:
// B, U, I, L, D, I, N, G,  , H, Y, S, T, E, R, E, S, I, S,  , I, N,  , A, I
// Length: 25

// Target:
// B, U, I, L, D, I, N, G,  , F, O, R, M, A, N, T, S, O, T,  , A, I,  ,  ,  
// Length: 25

let textToReplace = "BUILDING HYSTERESIS IN AI";
let newText       = "BUILDING FORMANT SOTA IN AI";
let newTextArr = newText.split('');
let idx = 0;

content = content.replace(/<span data-character="([^"])"/g, function(match, char) {
    if (idx < newTextArr.length) {
        let newChar = newTextArr[idx];
        idx++;
        // There are some spans that have spaces. The original has spaces in spans that don't have data-character, but wait, the original HAS:
        // <span data-character=" " ...>
        if (newChar === ' ') newChar = ' ';
        return `<span data-character="${newChar}"`;
    }
    return match;
});

// Also replace the span text content if any? No, the pseudo elements ::before and ::after read `attr(data-character)`!
// Wait, the CSS uses `content: attr(data-character);`

fs.writeFileSync('src/top-section.tsx', content);
console.log("Updated letters");
