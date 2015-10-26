var vowel = ["a", "e", "i", "o", "u"];

function isVowel (char) {
    var answer;
    for (i=0; i<vowel.length; i++) {
        answer = "";
        if (vowel[i] === char) {
            answer += "This character is a vowel!";
            break;
        }
        else {
            answer += "This character is not a vowel!";     
        }
    }
    return answer;
}

isVowel("o");