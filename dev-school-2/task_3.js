function groupAnagrams(words) {
    const anagramGroups = {};

    for (let word of words) {
        let sortedWord = sortingWord(word);

        if (anagramGroups[sortedWord]) {
            anagramGroups[sortedWord].push(word);
        } else {
            anagramGroups[sortedWord] = [word];
        }
    }

    let anagram = [];
    for (let i in anagramGroups) {
        anagram.push(anagramGroups[i]);
    }

    return anagram;
}

function sortingWord(word) {
    return word.split('').sort().join('');
}

