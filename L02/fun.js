function censonredWord(sentence, wordtoCensor ) 
{
    const regex = new RegExp(wordtoCensor, 'gi');
    const censonredText = sentence.replace(regex, '****');
    return censonredText;
}
const originalPost = "JavaScript is fun but sometimes JavaScript can be tricky.";
const censoredPost = censonredWord(originalPost, "JavaScript");
console.log(censoredPost);
