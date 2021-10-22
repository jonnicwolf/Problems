// const wordFrequencies(paragraph) {
const wordFrequencies = (paragraph) => {
    const words = paragraph.split(" ");
    for (let i = 0; i <= words.length; i += 1) {
      words[i] = cleanWord(words[i]);
    }
  
    const frequencies = {}
    for (let word of words) {
      frequencies[word] = 1;
    }
  
    return frequencies;z
}
  
 wordFrequencies("I went to the store, but the store was closed. Maybe the store will be open tomorrow. But I fear not.")
  
  function cleanWord (word) {
      
    const lower = word.toLowerCase();
    const noEndingPunctuation = lower.replace(/[^a-zA-Z0-9]$/, '')
  
    return noEndingPunctuation
  }